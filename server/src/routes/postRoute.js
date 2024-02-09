const routes = require('express').Router()
const { getController, postController, deleteController } = require('../controllers/index')
const { getDataController } = getController
const { newPostController} = postController
const {deletePostController} = deleteController


routes.get("/posts", getDataController)
routes.post("/posts", newPostController)
routes.delete("/posts/:id", deletePostController)
routes.put("/posts/like/:id")


module.exports = routes