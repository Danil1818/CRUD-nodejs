const postController = require('../controller/post.controller')
const Router = require('express')
const router = new Router()

// router.get('/post', postController.getPosts)
router.post('/post', postController.createPost)
router.get('/post', postController.getPostUser)
router.delete('/post/:id', postController.deletePost)

module.exports = router
