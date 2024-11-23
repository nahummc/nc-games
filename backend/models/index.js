// models/index.js
const Sequelize = require('sequelize');
const User = require('./users'); // Import the User model

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'y0m4m4#!$',
  database: 'nc-db'
});

// Sync all models
sequelize.sync();

module.exports = { sequelize, User };
