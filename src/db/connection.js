const { Sequelize } = require('sequelize');

const db = new Sequelize('system_ecommerce', 'root', 'admin', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    //logging: false
});

module.exports = db;