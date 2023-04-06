const { Router } = require('express');
const { validateLogin } = require('../middleware/loginValidation');
const loginController = require('../controller/loginController');

const route = Router();

route.post('/', validateLogin, loginController.newLogin);

module.exports = route;