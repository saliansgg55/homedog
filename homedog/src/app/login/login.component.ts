import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Apiservice } from '../services/api.service';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  // Vincular formulario con el del HTML
  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private api: Apiservice, private router: Router) { }

  ngOnInit(): void {
  }



  onLogin(form: LoginI) {

    
    this.api.loginByEmail(form).subscribe(data => {
    console.log(`datosss ${data}`);


      let dataResponse: ResponseI = data;
      
      if (dataResponse.status == "success") {
       
      // localStorage.setItem('token', dataResponse.result);
       //console.log(tok);
       // localStorage.setItem('token', dataResponse.result.token);
        this.router.navigate(['dashboard']);

      } else {
        this.router.navigate(['editar']);
      }

      // console.log(data);
    });
  }
}
