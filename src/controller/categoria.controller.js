const { response, request } = require('express');
const { Categoria } = require('../models');


const verCategorias = async (req = request, res = response) => {
    try {
        const categorias = await Categoria.findAll();
        res.json({
            categorias
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ha ocurrido un error, hable con un administrador."
        });
    }
}


module.exports = {
    verCategorias
}