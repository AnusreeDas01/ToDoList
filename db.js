const mysql = require('mysql2/promise');

async function connectToMySQL() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Anu@123',
    database: 'test'
  });

  console.log("Successfully Connected to MySQL.");

  return connection;
}

module.exports = {connectToMySQL};
