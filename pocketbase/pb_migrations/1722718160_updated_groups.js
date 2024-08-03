/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dtagg65qpu9asom")

  collection.viewRule = "@request.auth.id != \"\" && \n@collection.groupMembers.user.id ?= @request.auth.id &&\n@collection.groupmembers.group.id ?= id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dtagg65qpu9asom")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
