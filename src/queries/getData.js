const dbConnection = require ('../database/db_connections.js');

const getPainting = (cb) => {
  dbConnection.query('SELECT paint.paint_name, paint.paint_description,paint.img, painters.painter_name FROM paintings As paint join painters on painters.painter_id = paint.painter_id')
}
