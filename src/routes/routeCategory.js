const { Router } = require('express');
const { validateToken } = require('../middleware/tokenJwtValidation');
const categoryController = require('../controller/categoryController');

const routeCategory = Router();

routeCategory.post('/', validateToken, categoryController.createCategory);
routeCategory.get('/', validateToken, categoryController.findAllCategories);

module.exports = routeCategory;