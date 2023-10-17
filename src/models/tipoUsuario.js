const { DataType, DataTypes } = require("sequelize");
const db = require("../db/connection");

const TipoUsuario = db.define("TipoUsuario", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = TipoUsuario;
