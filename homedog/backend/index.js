// Conexion  a la Base de datos
'use strict'

// Carga modulo mongoose
var mongoose = require('mongoose'); 
var app = require('./app');
var port = 3900;


mongoose.set('useFindAndModify', false);  // Desacivamos metodos antiguos
mongoose.Promise = global.Promise;

// Conexion a MongoDB
mongoose.connect('mongodb://localhost:27017/api_rest_dog', { useNewUrlParser:true } )
        .then(()=> { 
        console.log('La conexion a la DB fue bien');

        // Crear Servidor y escuchar peticiones HTTP

        app.listen(3900, () => {
            console.log('Servidor corriendo en http://localhost/'+ port);    
        });
});



