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


async function createUserTable() {
  try {
    const connection = await connectToMySQL();
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("User table created successfully.");
  } catch (error) {
    console.error("Error creating user table:", error);
  }
}

module.exports = {
  connectToMySQL,
  createUserTable
};
