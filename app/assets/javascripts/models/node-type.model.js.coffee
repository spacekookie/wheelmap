attr = DS.attr

Wheelmap.NodeType = DS.Model.extend
  category: DS.belongsTo('category')
  identifier: attr()

  name: (->
    I18n.t("poi.name." + @get('category.identifier') + "." + @get('identifier'))
  ).property('category.identifier', 'identifier')

Wheelmap.NodeTypeAdapter = DS.RESTAdapter.extend()