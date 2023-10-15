const { request, response } = require('express');
const { Producto } = require('../models');

const verProductos = async (req = request, res = response) => {
    try {
        const productos = await Producto.findAll();
        res.status(200).json({
            productos
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ha ocurrido un error, hable con un administrador."
        });
    }
}

const agregarProducto = async (req = request, res = response) => {
    const { body } = req;
    body.nombre = body.nombre.toUpperCase();
    try {
        const productoExiste = await Producto.findOne({
            where : {
                nombre : body.nombre
            }
        });

        if (productoExiste) {
            return res.status(400).json({
                msg : "El producto que intentas agregar, ya se encuentra registrado.",
                producto: productoExiste
            });
        }
        const producto = new Producto(body);
        await producto.save();
        res.status(200).json({
            producto
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ha ocurrido un error intentando agregar el producto, contacte a un administrador."
        });
    }
}

module.exports = {
    verProductos,
    agregarProducto
}