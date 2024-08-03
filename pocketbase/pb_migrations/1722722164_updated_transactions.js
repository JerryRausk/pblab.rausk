/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5pvh5hxnrdzku4a")

  collection.createRule = "@request.auth.id != \"\" && \n@collection.groupMembers.user.id ?= @request.auth.id &&\n@collection.groupmembers.group.id ?= @request.data.group.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5pvh5hxnrdzku4a")

  collection.createRule = "@request.auth.id != \"\" && \n@collection.groupMembers.user.id ?= @request.auth.id &&\n@collection.groupmembers.group.id ?= @request.data.group"

  return dao.saveCollection(collection)
})
