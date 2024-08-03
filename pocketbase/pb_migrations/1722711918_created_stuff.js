/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "afzy1se4ol3qinw",
    "created": "2024-08-03 19:05:18.611Z",
    "updated": "2024-08-03 19:05:18.611Z",
    "name": "stuff",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zott7l7p",
        "name": "info",
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
  const collection = dao.findCollectionByNameOrId("afzy1se4ol3qinw");

  return dao.deleteCollection(collection);
})
