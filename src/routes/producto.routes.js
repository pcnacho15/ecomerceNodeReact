const { Router } = require('express');
const { check } = require('express-validator');
const { verProductos, agregarProducto, verProducto, actualizarProducto, eliminarProducto } = require('../controller/producto.controller');

const router = Router();

router.get('/', verProductos);

router.get('/:id', verProducto)

router.post('/', agregarProducto);

router.put('/:id', actualizarProducto);

router.delete('/:id', eliminarProducto);

module.exports = router;