const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Categoria = db.define('categorias', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    usuario_crea: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Categoria;