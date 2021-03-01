import { Injectable } from '@angular/core';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

//var Usuario = require('../models/login.interface');

@Injectable({
  providedIn: 'root'
})
export class Apiservice{

  public url: string;

  

  constructor(private http: HttpClient)
   { 
     this.url = Global.url;
    }


  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url+"auth";
    return this.http.post<ResponseI>(direccion, form);
  }

}
