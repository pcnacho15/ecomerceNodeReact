const { Router } = require('express');
const { check } = require('express-validator');
const { 
    verCategorias, 
    agregarCategoria, 
    verCategoria,
    actualizarCategoria,
    eliminarCategoria} = require('../controller/categoria.controller');

const router = Router();

router.get('/', verCategorias);

router.get('/:id', verCategoria);

router.post('/', agregarCategoria);

router.put('/:id', actualizarCategoria);

router.delete('/:id', eliminarCategoria);

module.exports = router;