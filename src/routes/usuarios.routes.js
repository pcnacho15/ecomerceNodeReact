const { Router } = require('express');
const { check } = require('express-validator');
const { verUsuarios } = require('../controller/usuario.controller');


const router = Router();


router.get('/', verUsuarios);


module.exports = router;