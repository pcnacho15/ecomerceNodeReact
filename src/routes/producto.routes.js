const { Router } = require('express');
const { check } = require('express-validator');
const { verProductos, agregarProducto } = require('../controller/producto.controller');

const router = Router();

router.get('/', verProductos);

router.post('/', agregarProducto);


module.exports = router;