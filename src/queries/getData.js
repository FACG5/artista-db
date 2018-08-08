const dbConnection = require('../database/db_connections.js');

const getPainting = (cb) => {
  dbConnection.query('SELECT paint.paint_name, paint.img, paint.paint_description, painters.painter_name, cat.cat_name FROM paintings As paint join painters on painters.painter_id = paint.painter_id join categories AS cat on cat.cat_id = paint.cat_id;' , (err, res) =>{
    if (err){
      cb (err);
    }else{
      cb (null, res.rows);
    }
  });
};


const getPainters = (cb) =>{
  dbConnection.query ('select painters.painter_name , painters.img , cat.cat_name from painters join categories AS cat on cat.cat_id = painters.cat_id;' , (err , res) =>{
    if (err){
      cb (err);
    }else{
      cb (null , res.rows);
    }
  });
};

const getCategories = (cb) =>{
  dbConnection.query ('select cat_name, cat_description from categories;', (err , res) =>{
    if (err){
      cb (err);
    }else{
      cb (null , res.rows);
    }
  });
};

module.exports = {
  getPainting,
  getPainters,
  getCategories
}

