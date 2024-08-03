/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "mkced9ng3zs156p",
    "created": "2024-08-03 18:58:09.309Z",
    "updated": "2024-08-03 18:58:09.309Z",
    "name": "users",
    "type": "auth",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": false,
      "allowOAuth2Auth": false,
      "allowUsernameAuth": true,
      "exceptEmailDomains": [],
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": [],
      "onlyVerified": false,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mkced9ng3zs156p");

  return dao.deleteCollection(collection);
})
