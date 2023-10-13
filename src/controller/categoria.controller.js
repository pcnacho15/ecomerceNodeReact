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

const verCategoria = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const categoria = await Categoria.findByPk(id);
        console.log(categoria);
        if (!categoria) {
            return res.status(400).json({
                msg: "La categoría no existe."
            })
        }

        res.status(200).json({
            categoria
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ha ocurrido un error, hable con un administrador."
        });
    }
}

const agregarCategoria = async (req = request, res = response) => {
    const { body } = req;
    const nombreCategoria = body.nombre.toUpperCase();
    try {
        const categoriaExiste = await Categoria.findOne({
            where: {
                nombre: nombreCategoria
            }
        });

        if (categoriaExiste) {
            return res.status(400).json({
                msg: "Esta categoria ya existe."
            });
        }
        body.nombre = nombreCategoria;
        const categoria = new Categoria(body);
        await categoria.save();

        res.status(200).json({
            msg: "La categoría ha sido agregada de manera exitosa."
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ha ocurrido un error, hable con un administrador."
        });
    }
}

const actualizarCategoria = async (req = request, res = response) => {
    const { id } = req.params;
    const { usuario_crea, createdAt, ...resto } = req.body;

    try {
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(400).json({
                msg: "La categoría que intentas actualizar no existe."
            });
        }
        resto.nombre = resto.nombre.toUpperCase();
        await categoria.update(resto);

        res.status(200).json({
            msg: "La categoría ha sido actualizada con exito.",
            categoria
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ha ocurrido un error al intentar actualizar la categoría, hable con un administrador."
        });
    }
}

const eliminarCategoria = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(400).json({
                msg: "La categoría no existe."
            });
        }
        await categoria.destroy();
        res.json({
            msg: "La categoría se ha eliminado de manera exitosa.",
            categoria
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ha ocurrido un error al intentar eliminar la categoría, hable con un administrador."
        });
    }

}


module.exports = {
    verCategorias,
    verCategoria,
    agregarCategoria,
    actualizarCategoria,
    eliminarCategoria
}