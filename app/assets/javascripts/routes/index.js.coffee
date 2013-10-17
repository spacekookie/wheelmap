Wheelmap.IndexRoute = Ember.Route.extend
  boundsRatioBuffer: 0.41
  _previousBounds: null
  _nodeRequestCounter: 0 # stop overlapping requests

  setupController: (controller, model, queryParams)->
    properties = {}
    mapController = @controllerFor('map')
    toolbarController = @controllerFor('toolbar')

    if queryParams.lat? && queryParams.lon?
      properties.center = new L.LatLng(queryParams.lat, queryParams.lon)

    if queryParams.zoom?
      properties.zoom = parseInt(queryParams.zoom, 10)

    mapController.setProperties(properties)

    if queryParams.node_id?
      mapController.set('poppingNode', queryParams.node_id)

    if queryParams.q?
      toolbarController.set('searchString', queryParams.q)

    if queryParams.status?
      statusFilters = []

      if queryParams.status isnt true
        statusFilters = queryParams.status.split(',')

      toolbarController.set('statusFilters', statusFilters)

  model: (params, queryParams)->
    toolbarController = @controllerFor('toolbar')
    toolbarController.set('content', @store.findAll('category'))
    return

  actions:
    zooming: (isZooming, bounds)->
      if isZooming # Only reload when zooming is finished
        return

      @send('permalink')
      @send('updateNodes', bounds)

    moving: (isMoving, bounds)->
      if isMoving # Only reload when moving is finished
        return

      @send('permalink')

      if @_previousBounds?
        paddedBounds = @_previousBounds.pad(@boundsRatioBuffer)

        if paddedBounds.contains(bounds)
          return

      @send('updateNodes', bounds)

    layerChanged: (layer)->
      if layer?
        bounds = layer.getBounds()

        @send('updateNodes', bounds)

    updateNodes: (bounds)->
      self = @
      currentRequestCount = ++self._nodeRequestCounter
      self._previousBounds = bounds

      mapController = @controllerFor('map')
      mapController.set('isLoading', true)

      @store.findQuery('node', bbox: bounds.toBBoxString()).then (nodes)->
        if currentRequestCount != self._nodeRequestCounter
          return

        mapController.clear()
        mapController.addObjects(nodes)
        mapController.set('isLoading', false)
        self._nodeRequestCounter = 0

    popping: ()->
      @send('permalink')

    toggleStatusFilter: ()->
      @send('permalink')

    toggleIsActive: ()->
      @send('permalink')


    permalink: ()->
      Ember.run.sync() # Needed for having all parameters up to date

      queryParams = {}

      mapController = @controllerFor('map')
      toolbarController = @controllerFor('toolbar')
      center = mapController.get('center')
      statusFilters = toolbarController.get('statusFilters')
      categoriesFilters = toolbarController.get('activeCategories').mapBy('identifier')

      queryParams.zoom = mapController.get('zoom')
      queryParams.lat = center.lat
      queryParams.lon = center.lng
      queryParams.q   = mapController.get('searchString')

      queryParams.node_id = mapController.get('poppingNode.id')
      if statusFilters.length < 4
        queryParams.status = statusFilters

      if toolbarController.get('length') < categoriesFilters.length
        queryParams.categories = categoriesFilters



      @replaceWith('index', queryParams: queryParams)