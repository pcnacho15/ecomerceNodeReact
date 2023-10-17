const { DataType, DataTypes } = require("sequelize");
const db = require("../db/connection");

const Usuario = db.define("Usuario", {
  tipo_documento: {
    type: DataTypes.CHAR,
    allowNull: false
  },

  numero_documento: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellidp: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo_confirmado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  bloqueado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
    
  },
  tipo_documento:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Usuario;
