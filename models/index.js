const sequelize = require('../config/db');
const User = require('./User');
const Policy = require('./Policy');

// Define relationships here if any

sequelize.sync({ alter: true }).then(() => {
  console.log('Database synchronized');
}).catch(err => {
  console.error('Error synchronizing database:', err);
});

module.exports = { User, Policy };
