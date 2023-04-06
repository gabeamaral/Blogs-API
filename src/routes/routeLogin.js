const { Router } = require('express');
const { validateLogin } = require('../middleware/loginValidation');
const loginController = require('../controller/loginController');

const routeLogin = Router();

routeLogin.post('/', validateLogin, loginController.newLogin);

module.exports = routeLogin;