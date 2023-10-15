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

const verProducto = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const productoExiste = await Producto.findByPk(id);
        if (!productoExiste) {
            return res.status(400).json({
                msg: "El producto que intentas ver, no ha sido encontrado."
            });
        }
        res.json({
            producto: productoExiste
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
            where: {
                nombre: body.nombre
            }
        });
        if (productoExiste) {
            return res.status(400).json({
                msg: "El producto que intentas agregar, ya se encuentra registrado.",
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

const actualizarProducto = async (req = request, res = response) => {
    const { id } = req.params
    const { usuario_crea, createdAt, ...resto } = req.body;
    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(400).json({
                msg: "El productos que intentas actualizar, no existe."
            });
        }

        resto.nombre = resto.nombre.toUpperCase();
        await producto.update(resto);

        res.status(200).json({
            msg: "El producto ha sido actualizado de manera exitosa.",
            producto
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ha ocurrido un error al intentar actualizar el producto, contacte a un administrador."
        });
    }
}

const eliminarProducto = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            res.status(400).json({
                msg: "El producto no existe."
            });
        }
        await producto.destroy();
        res.status(200).json({
            msg: "El producto se ha eliminado de manera exitosa.",
            producto
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ha ocurrido un error al intentar borrar el producto, contacte con un administrador."
        });
    }
}

module.exports = {
    verProductos,
    verProducto,
    agregarProducto,
    actualizarProducto,
    eliminarProducto
}