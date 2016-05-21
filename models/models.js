var model={};

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'n0m3l0s3',
  database : 'UNIMIND'	
});

model.connection=connection;
model.connection.connect();

module.exports = model;