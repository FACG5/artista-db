const fs = require('fs');

const dbConnection = require('./db_connections.js');

const sql = fs.readdirSync(`${__dirname}/db_bulid.sql`).toString();

dbConnection.query(sql, (err, res) => {
  if (err) throw err;
  console.log('database created');
});
