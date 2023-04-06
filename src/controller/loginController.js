const loginService = require('../service/loginService');

const newLogin = async (req, res) => {
  const { email, password } = req.body;
  const { status, token, message } = await loginService.newLogin(email, password);
  if (message) return res.status(status).json({ message });
  return res.status(status).json({ token });
};

module.exports = {
  newLogin,
};