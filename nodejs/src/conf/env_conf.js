require("dotenv").config();

const CONF = {
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  JWT_ALGORITHM: process.env.JWT_ALGORITHM,
  JWT_ISSUER: process.env.JWT_ISSUER,
  DATABASE_URI: process.env.DATABASE_URI,
};

module.exports = CONF;
