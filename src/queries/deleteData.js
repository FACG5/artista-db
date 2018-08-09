const dbConnection = require('../database/db_connections.js');

const removePaintings = (paint_id, cb) => {
  const sql = {
    text: 'DELETE FROM paintings WHERE paint_id =$1 ',
    values: [paint_id],
  };
  dbConnection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = removePaintings;
