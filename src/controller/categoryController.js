const categoryService = require('../service/categoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const newCategory = await categoryService.createCategory(name);
  res.status(201).json(newCategory);
};

const findAllCategories = async (req, res) => {
  const allCategories = await categoryService.findAllCategories();
  res.status(200).json(allCategories);
};

module.exports = {
  createCategory,
  findAllCategories,
};