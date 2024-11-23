// src/config/database.js
require('dotenv').config(); // Loads environment variables from .env file

const { Sequelize } = require('sequelize');

// Initialize the Sequelize instance with PostgreSQL connection details
const sequelize = new Sequelize({
  host: process.env.DB_HOST || 'localhost', // Use 'localhost' as default if no env variable set
  port: process.env.DB_PORT || 5432, // Default PostgreSQL port
  database: process.env.DB_NAME || 'myapp_db', // Database name
  username: process.env.DB_USER || 'myuser', // Database username
  password: process.env.DB_PASSWORD || 'mypassword', // Database password
  dialect: 'postgres', // We're using PostgreSQL
  logging: false // Disable Sequelize logging in the console (optional)
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;
