attr = DS.attr

Wheelmap.Node = DS.Model.extend
  lat: attr()
  lon: attr()
  name: attr()
  sponsor: attr()
  wheelchair: attr()
  street: attr()
  housenumber: attr()
  postcode: attr()
  city: attr()
  region: attr()
  type: DS.belongsTo('node_type')
  wheelchair_description: attr()
  website: attr()
  phone: attr()
  oldWheelchair: null

  wheelchairWillChange: (()->
    oldWheelchair = @get('oldWheelchair')

    unless oldWheelchair?
      @set('oldWheelchair', @get('wheelchair'))
  ).observesBefore('wheelchair')

  location: (()->
    new L.LatLng(@get('lat'), @get('lon'))
  ).property('lat', 'lon')

  statusText: (()->
    I18n.t('wheelchairstatus.' + @get('wheelchair'));
  ).property('wheelchair')

  headline: (()->
    @get('name') || @get('type.name')
  ).property('name', 'type.name')

  breadcrumbs: (()->
    category = @get('type.category.identifier')

    [
      @get('region'),
      @get('type.category.name'),
      @get('type.name')
    ].compact()
  ).property('region', 'type.name','type.category.name')

  showPath: (()->
    '/nodes/' + @get('id')
  ).property('id')

  editPath: (()->
    '/nodes/' + @get('id') + '/edit'
  ).property('id')

  updatePath: (()->
    '/nodes/' + @get('id') + '/update_wheelchair.js'
  ).property('id')

  popupPath: (()->
    '/popup/' + @get('id')
  ).property('id')

  address: (()->
    address = []
    addr = @getProperties('street', 'housenumber', 'city', 'postcode')

    if addr.street? and addr.housenumber?
      address.push I18n.t('node.address.street', addr).trim()

    if addr.city? and addr.postcode?
      address.push I18n.t('node.address.city', addr).trim()

    address.join(', ')
  ).property('street', 'housenumber', 'postcode', 'city')

  icon: Ember.computed.readOnly('type.icon')

Wheelmap.NodeAdapter = DS.ActiveModelAdapter.extend()

Wheelmap.NodeSerializer = DS.ActiveModelSerializer.extend
  serialize: () ->
    json = @_super.apply(@, arguments)

    delete json.region

    json.type = json.type_id
    delete json.type_id

    json

Wheelmap.Node.reopenClass
  WHEELCHAIR_STATUSES: ['yes', 'limited', 'no']