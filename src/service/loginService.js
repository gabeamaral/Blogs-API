const tokenJwt = require('jsonwebtoken');
const { User } = require('../models');

const newLogin = async (email, password) => {
  const loginInformation = await User.findOne({ where: { email, password } });
  if (!loginInformation) return { status: 400, message: 'Invalid fields' };
  if (password !== loginInformation.password) return { status: 400, message: 'Invalid fields' };
  const payload = { data: loginInformation };
  const token = tokenJwt.sign(payload, process.env.JWT_SECRET);
  return { status: 200, token };
};

module.exports = {
  newLogin,
};