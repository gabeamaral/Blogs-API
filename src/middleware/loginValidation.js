const validInformation = (email, password, res) => {
  if (!email) return res.status(400).json({ message: 'Some required fields are missing' });
  if (!password) return res.status(400).json({ message: 'Some required fields are missing' });
  return null;
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const erroLogin = validInformation(email, password, res);
  if (erroLogin !== null) return validInformation;
  next();
};

module.exports = {
  validateLogin,
};