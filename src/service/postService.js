const { BlogPost, Category, User } = require('../models');

const findAll = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  });
  return allPosts;
};

const findPostById = async (id) => {
  const idPost = await BlogPost.findByPk(id, {
      include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
      ],
  });
  if (!idPost) {
    return null;
  }
  return idPost;
};

module.exports = {
  findAll,
  findPostById,
};