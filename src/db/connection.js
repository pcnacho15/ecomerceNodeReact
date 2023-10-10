const { Sequelize } = require('sequelize');

// Creación de acceso hacia la base de datos
const db = new Sequelize('system_ecommerce', 'root', 'admin', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    //logging: false
});

module.exports = db;