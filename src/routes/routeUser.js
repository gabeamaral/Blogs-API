const { Router } = require('express');
const { validateUser } = require('../middleware/userValidation');
const { validateToken } = require('../middleware/tokenJwtValidation');
const userController = require('../controller/userController');

const routeUser = Router();

routeUser.get('/', validateToken, userController.users);
routeUser.get('/:id', validateToken, userController.userId);
routeUser.post('/', validateUser, userController.newUser);

module.exports = routeUser;