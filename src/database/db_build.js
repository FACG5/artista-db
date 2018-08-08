const fs = require('fs');
const path = require('path');
const dbConnection = require('./db_connections');

const sql = fs.readFileSync(path.join(__dirname, 'db_build.sql')).toString();

dbConnection.query(sql, (err, result) => {
  if (err) throw new Error('Erorr buildingdataBase');
  console.log('dataBase have been built', result);
});
