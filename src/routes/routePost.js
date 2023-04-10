const { Router } = require('express');
const { validateToken } = require('../middleware/tokenJwtValidation');
const postController = require('../controller/postController');

const routePost = Router();

routePost.get('/', validateToken, postController.findAll);
routePost.get('/:id', validateToken, postController.findPostById);

module.exports = routePost;