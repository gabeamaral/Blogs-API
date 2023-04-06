const tokenJwt = require('jsonwebtoken');

const secretJwt = process.env.JWT_SECRET;

const validateToken = async (req, res, next) => {
  const jwtToken = req.headers.authorization;
  if (!jwtToken) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = tokenJwt.verify(jwtToken, secretJwt);
    req.user = decoded.data;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};