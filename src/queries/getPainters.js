const dbConnection = require('../database/db_connections.js');

const getPainters = (cb) => {
  dbConnection.query('SELECT * FROM Painters', (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getPainters;
