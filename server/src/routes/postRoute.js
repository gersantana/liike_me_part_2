const routes = require('express').Router()
const { getController, postController } = require('../controllers/index')
const { getDataController } = getController
const { newPostController } = postController


routes.get("/posts", getDataController)


routes.post("/posts", newPostController)


module.exports = routes