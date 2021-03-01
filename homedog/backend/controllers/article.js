'use strict'

const { json } = require('body-parser');
var validator = require('validator');
var Usuarios = require('../models/article');


/*
const jwt = require('jsonwebtoken');
const bycript = require('bycriptjs');
const SECRET_KEY = 'secretkey123456';

exports.createUser =  (req, res, next) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    User.create (newUser, (err, user) => {
        if(err) return res.status(500).send("server error");
        const expireIn = 24 * 60 * 60;
        const accesToken = jwt.sign({id: user.id },
            SECRET_KEY,{
                expireIn: expireIn
            });

            // response
            response.send({user});
    });
}  

///////////////////////////////////
/// LOGIN USUARIO
///////////////////////////////////

exports.loginUser = (req, res, next) => {
    const userData = {
         email: req.body.email,
         password: req.body.password
    }

    // Buscar si existe el usuario en la base de datos
    User.findOne({email: userData.email}, (err, user) => {
        if(err) return res.status(500).send("Server error");
        if(!user){
            // email usuario no existe
            res.status(409).send({message: 'Algo esta mal'});
        } else {
            const resultPassword =  userData.password;
            if(resultPassword){
                const expireIn = 60 * 60;
                const accesToken = jwt.sign({id: user.id}, SECRET_KEY, {expireIn:expireIn });
                res.send({ userData });
            }else{
                // password incorrecto
                res.status(409).send({message: 'Algo esta mal'});
            }
        }
    });
}

*/

var controller = {

    getUsuario: (req, res) => {

        
       // const usuarioId = '603490a66273820bfcc93aaa' ; 

        //const usuarioId = JSON.stringify(req.params.id);
        //const usuarioId = JSON.parse(req.params.id);

        const usuarioId = req.params.id;
        //usuarioId.toString();
        //const userId = JSON.stringify(usuarioId);

        if (usuarioId) {
            //res.json({usuarioId});
            Usuarios.findById(usuarioId).exec(function (err, producto) {
                return res.status(200).send({
                    status: 'success',
                    producto: producto
                });
            });

            /*  Usuarios.findById({_id: req.params.id}, (err, usuario) => {
                  res.json({usuario: usuario});
                  //res.json({usuario:usuario});
                 /* if (err) {
                      return res.status(500).send({
                          status: 'error',
                          message: 'Error en el servidor'
                      });
                  }
      
                  if (!usuario) {
                      return res.status(404).send({
                          status: 'error',
                          message: 'No existe el usuario en la BD'
                      });
                  }
      
                  return res.status(200).send({
                      status: 'success',
                      usuario
                  });
      */

            //   });
        }
        /*
                // Comprobar que existe
                if (!usuarioId || usuarioId == null) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el usuario'
                    });
                }
        
                // Buscar Usuario
                Usuario.findById(usuarioId, (err, usuario) => {
                    if (err) {
                        return res.status(500).send({
                            status: 'error',
                            message: 'Error en el servidor'
                        });
                    }
        
                    if (!usuario) {
                        return res.status(404).send({
                            status: 'error',
                            message: 'No existe el usuario en la BD'
                        });
                    }
        
                    return res.status(200).send({
                        status: 'success',
                        usuario
                    });
        
        
                });
        */
    }


};

module.exports = controller;
