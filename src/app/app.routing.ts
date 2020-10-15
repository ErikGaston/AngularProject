import { NgModule } from '@angular/core';
//Importar modulos del router de angular
//Importar el código del sistema de routing
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import {HomeComponent} from './componentes/home/home.component' ;
import {AboutComponent} from './componentes/about/about.component' ;
import {ContactComponent} from './componentes/contact/contact.component' ;
import {ServiceComponent} from './componentes/service/service.component' ;


//Array de rutas
const routes: Routes =[
    {path: '', component: HomeComponent},
    {path: 'sobre-mi', component: AboutComponent},
    {path: 'servicios', component: ServiceComponent},
    {path: 'contacto', component: ContactComponent},
    {path: '**', component: HomeComponent } //ruta por default 404
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
//Exportar el modulo del router
export class AppRoutingModule { }
