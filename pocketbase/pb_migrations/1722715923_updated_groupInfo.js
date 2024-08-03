/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("omvfcdyn3ugjkld")

  collection.listRule = "@request.auth.id != \"\" && \n@collection.groupMembers.user.id ?= @request.auth.id &&\n@collection.groupmembers.group.id ?= group.id"
  collection.viewRule = "@request.auth.id != \"\" && \n@collection.groupMembers.user.id ?= @request.auth.id &&\n@collection.groupmembers.group.id ?= group.id"
  collection.createRule = "@request.auth.id != \"\" && \n@collection.groupMembers.user.id ?= @request.auth.id &&\n@collection.groupmembers.group.id ?= group.id && \n@collection.groupMembers.role = \"admin\""
  collection.updateRule = "@request.auth.id != \"\" && \n@collection.groupMembers.user.id ?= @request.auth.id &&\n@collection.groupmembers.group.id ?= group.id && \n@collection.groupMembers.role = \"admin\""
  collection.deleteRule = "@request.auth.id != \"\" && \n@collection.groupMembers.user.id ?= @request.auth.id &&\n@collection.groupmembers.group.id ?= group.id && \n@collection.groupMembers.role = \"admin\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("omvfcdyn3ugjkld")

  collection.listRule = "@request.auth.id != \"\" && \n@collection.groupMembers.user.id ?= @request.auth.id &&\n@collection.groupmembers.group.id ?= group.id && \n@collection.groupMembers.role = \"admin\""
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
