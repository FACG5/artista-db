const dbConnection = require('../database/db_connections.js');

cont postPainting = (paint_name, paint_description, img_url, cb) => {
    dbConnection.query('INSERT INTO paintings (paint_name, paint_description, img) VALUES ($1, $2, $3)', [paint_name, paint_description, img_url] , (err, res) => {
        if (err) {
            cb(err);
        } else {
            cb(null, res);
        }
    });
}

module.exports = postPainting;