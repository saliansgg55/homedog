import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { JsonService } from './json.service';

import { observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Usuario } from '../../backend/models/article';
import { controller } from '../../backend/controllers/article';

// Servicio (Para usarlo defino propiedad en el constructor)
import { UsuarioService } from './services/article.service';

import Swal from 'sweetalert2';
//import { url } from 'inspector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsuarioService] // Servicio
})



export class AppComponent {

  title = 'homedog';
  public usuarios: Usuario[];

  form: FormGroup;
  //user: Usuario;

  constructor(
    private _usuarioService: UsuarioService, // Servicio
    private formBuilder: FormBuilder,
    public json: JsonService
  ) {
    /*this.json.getJson('https://api.github.com/users/saliansgg55').subscribe((res: any) => {
      console.log(res.login);
    });*/
    this.buildForm();

  }
  //http://54.207.115.134:8090/v1/clientes/grupos-economicos/search-like/total
  ngOnInit() {

  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      pwd: ['', [Validators.required]]
    });

    this.form.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        // console.log(value);
      });

  }

  save(event: Event) {
    event.preventDefault();


    if (this.form.valid) {
      const value = this.form.value;
      var usuario = value.email;
      var password = value.pwd;
      console.log("usuario : " + usuario);
      //console.log("asdasd");
      //alert(value.email);
      const newUsuario = { usuario, password };
      

    }

    /*if (this.form.valid) {
      const value = this.form.value;
      console.log(value);

      var usuario = new Usuario();

      usuario.user = value.email;

      //alert("vamos bien" + usuario.user);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      })
    }*/

  }


}
