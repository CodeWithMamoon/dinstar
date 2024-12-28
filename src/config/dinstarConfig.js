require("dotenv").config();

const config = {
  baseUrl: process.env.DINSTAR_API_BASE_URL,
  apiKey: process.env.DINSTAR_API_KEY,
};

module.exports = config;
