'use strict'

var express = require('express');

var ArticleController = require('../controllers/article');

var router = express.Router();

// Rutas de prueba
//router.post('/datoscurso', ArticleController.datosCurso);
//router.get('/test', ArticleController.test);

// Rutas utiles
//router.post('/save', ArticleController.save);
router.get('/usuario/:id', ArticleController.getUsuario);


module.exports = router;