const db = require('../config.json');

module.exports = {
  mongoURI: process.env.MONGO_URI || db.db_URI,
};
