const validateUser = (req, res, next) => {
  const regexEmail = /\S+@\S+\.\S+/;
  const { displayName, email, password } = req.body;
  if (!regexEmail.test(email)) {
    res.status(400).json({ message: '"email" must be a valid email' });
    return;
  }
  if (displayName.length < 8) {
    res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
    return;
  }
  if (password.length < 6) {
    res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
    return;
  }
  next();
};

module.exports = {
  validateUser,
};