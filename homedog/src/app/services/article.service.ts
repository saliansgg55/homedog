import { Injectable } from '@angular/core';
// Modelo de Usuario
import { Usuarios } from '../models/usuario';
// http
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Observable para recoger los datos que nos devuelve la API
import { Observable } from 'rxjs';
// url de la API
import { Global } from './global';
import { Usuario } from '../../../backend/models/article';


@Injectable()
export class UsuarioService {

    public url: string;

    constructor(
        // Cargo el http para hacer peticiones Ajax
        private _http: HttpClient
    ) {
        this.url = Global.url; // url de la API
    }

    guardarUsuario:((req, res) => {
        // return 'Guardando en la BD desde un servicio de angular';
        // return email;
        
        // this._http.post(this.url+ 'save:'+ user + pass);
        //var params = req.body;
        //console.log(params);

        
        //return this._http.get(this.url + 'logueo:'+ email);
    });

    

}