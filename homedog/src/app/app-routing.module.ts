import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  { path:'', redirectTo:'login' , pathMatch:'full'},
  { path:'login', component:LoginComponent },
  { path:'dashboard', component:DashboardComponent },
  { path:'editar', component:EditarComponent},
  { path:'nuevo', component:NuevoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponent = [LoginComponent, DashboardComponent, NuevoComponent, EditarComponent];