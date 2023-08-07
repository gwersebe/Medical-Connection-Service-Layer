const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'serviceAccount',
  password: 'W&J?MyWHw5I',
  database: 'medicalConnection',
});

module.exports = connection;
