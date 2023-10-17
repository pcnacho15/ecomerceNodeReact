const { response, request } = require('express');
const { Usuario } = require('../models');

const verUsuarios = async (req = request, res = response) => {
    try {
        const Usuario = await Usuario.findAll();
        res.json({
            Usuario
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ha ocurrido un error, hable con un administrador."
        });
    }
}

module.exports = {
    verUsuarios
}