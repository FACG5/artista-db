const dbConnection=require('db_connections');
const fs=require('fs');
const path=require('path');

const sql =fs.readFileSync(path.join(__dirname, 'db_build.sql')).toString;

dbConnection.query(sql,(err,result) =>{
  if (err) throw new Erorr('Erorr building dataBase');
  console.log('dataBase have been built');
})
