/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5pvh5hxnrdzku4a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rcdjssjv",
    "name": "group",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "dtagg65qpu9asom",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5pvh5hxnrdzku4a")

  // remove
  collection.schema.removeField("rcdjssjv")

  return dao.saveCollection(collection)
})
