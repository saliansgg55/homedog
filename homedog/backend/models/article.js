'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
var ArticleSchema = Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now},
    image: String
});
*/
var UsuarioSchema = Schema({
   // id: String,
    user: String,
    pass: String,
    date: { type: Date, default: Date.now},
    image: String,
    token: String
});

module.exports = mongoose.model('Usuarios', UsuarioSchema );
//module.exports = mongoose.model('Article', ArticleSchema );
// articles --> Guarda documentos de este tipo y con esta estructura dentro de la colleccion

