const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Producto = db.define('productos', {
    categorias_id : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    nombre : {
        type : DataTypes.STRING,
        allowNull : false
    },
    descripcion : {
        type : DataTypes.STRING,
        allowNull : false
    },
    precio : {
        type : DataTypes.DOUBLE,
        allowNull : false
    },
    cantidad : {
        type : DataTypes.INTEGER,
        allowNull : false,
        defaultValue : 0
    },
    estado : {
        type : DataTypes.BOOLEAN,
        allowNull : false,
        defaultValue: true
    },
    usuario_crea : {
        type : DataTypes.STRING,
        allowNull: false
    },
    usuario_modifica : {
        type : DataTypes.STRING,
        allowNull : true
    }

});

module.exports = Producto;