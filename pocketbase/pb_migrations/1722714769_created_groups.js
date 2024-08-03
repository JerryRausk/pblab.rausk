/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dtagg65qpu9asom",
    "created": "2024-08-03 19:52:49.260Z",
    "updated": "2024-08-03 19:52:49.260Z",
    "name": "groups",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pujg3fmq",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dtagg65qpu9asom");

  return dao.deleteCollection(collection);
})
