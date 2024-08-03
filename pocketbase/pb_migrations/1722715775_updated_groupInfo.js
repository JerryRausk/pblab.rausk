/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("omvfcdyn3ugjkld")

  collection.listRule = "@request.auth.id != \"\" && \n@collection.groupMembers.user.id ?= @request.auth.id &&\n@collection.groupmembers.group.id ?= group.id  "

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("omvfcdyn3ugjkld")

  collection.listRule = "@request.auth.id != \"\" && \n@collection.groupMembers.user.id = @request.auth.id &&\n@collection.groupmembers.group.id = group.id  "

  return dao.saveCollection(collection)
})
