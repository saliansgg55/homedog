'use strict'
const jwt = require('jsonwebtoken');
// CREAR SERVIDOR WEB CON EXPRESS

// Cargar modulos de node para crear el servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar Express (http)
var app = express();

// Cargar Fichero rutas
var article_routes = require('./routes/article');

// Cargar Middlewares (Se ejecuta antes de cargar una URL)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); // Convierte cualquier peticion a JSON

// CORS (Permite peticiones desde el FrontEnd)

// Añadir prefijos a rutas / cargar rutas
app.use('/api', article_routes);

app.post("/api/login", (req,res) =>{
    const user = {
        id: 1,
        nombre: "gaby",
        email: "salinasgg@gmail.com"
    }

    jwt.sign({user: user}, 'secret_key', (err, token)=>{
        res.json({
            token: token
        });
    });
    
});

/*
app.get("/usuario", (req,res) =>{

    res.json({mensaje: "tablero"});
});
*/
// Exportar modulo (fichero actual) para usarlo por fuera
module.exports = app;