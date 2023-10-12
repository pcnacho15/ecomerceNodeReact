const { Router } = require('express');
const { check } = require('express-validator');
const { verCategorias } = require('../controller/categoria.controller');

const router = Router();

router.get('/', verCategorias);

//router.get('/:id')

//router.post('/');

//router.put('/:id')

//router.delete('/:id');

module.exports = router;