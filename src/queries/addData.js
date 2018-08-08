const dbConnection = require('../database/db_connections.js');

const addPaintings = (painting,cb) =>{
    dbConnection.query(
    {
        text: "insert into paintings (paint_name, paint_description, img , painter_id) values ($1,$2,$3,$4)",
        values: [painting.paint_name, painting.paint_description, painting.img , painting.painter_id]
    },(err, res) =>{
        if (err) {
            cb (err);
        } else {
            cb(null,res.rows);
        }
    });
};

module.exports = addPaintings;