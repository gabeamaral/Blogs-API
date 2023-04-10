const postService = require('../service/postService');

const findAll = async (_req, res) => {
  const allPosts = await postService.findAll();
  res.status(200).json(allPosts);
};

const findPostById = async (req, res) => {
  const { id } = req.params;
  const idPost = await postService.findPostById(id);
  if (!idPost) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(idPost);
};

module.exports = {
  findAll,
  findPostById,
};