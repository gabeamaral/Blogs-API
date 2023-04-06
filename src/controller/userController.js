const userService = require('../service/userService');

const users = async (_req, res) => {
  const user = await userService.users();
  return res.status(200).json(user);
};

const userId = async (req, res) => {
  const { id } = req.params;
  const user = await userService.userId(id);
  if (user.message) {
    return res.status(user.status).json({ message: user.message });
  }
  return res.status(200).json(user);
};

const newUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, message, token } = await userService.newUser(
    email,
    displayName,
    image,
    password,
  );
  if (!message) {
    return res.status(status).json({ token });
  }
  return res.status(status).json({ message });
};

module.exports = {
  users,
  userId,
  newUser,
};