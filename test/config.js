require('dotenv').config();

module.exports = {
  baseURL: process.env.BASE_URL || 'http://localhost:3000',
  jwtSecret: process.env.JWT_SECRET || '',
};
