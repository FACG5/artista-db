const dbConnection = require('../database/db_connections.js');

const getPainting = (cb) => {
  dbConnection.query('SELECT paint.paint_id, paint.paint_name, paint.img, paint.paint_description, painters.painter_name FROM paintings As paint join painters on painters.painter_id = paint.painter_id;', (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};


const getPainters = (cb) => {
  dbConnection.query('select painters.painter_name , painters.img from painters;', (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};


module.exports = {
  getPainting,
  getPainters,
};
