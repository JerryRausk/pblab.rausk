/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "omvfcdyn3ugjkld",
    "created": "2024-08-03 19:55:01.283Z",
    "updated": "2024-08-03 19:55:01.283Z",
    "name": "groupInfo",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "z98l694s",
        "name": "field",
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
      },
      {
        "system": false,
        "id": "ouktftgd",
        "name": "secretInfo",
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
  const collection = dao.findCollectionByNameOrId("omvfcdyn3ugjkld");

  return dao.deleteCollection(collection);
})
