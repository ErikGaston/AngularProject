import { NgModule } from '@angular/core';
//Importar modulos del router de angular
//Importar el código del sistema de routing
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import {HomeComponent} from './componentes/home/home.component' ;
import {AboutComponent} from './componentes/about/about.component' ;
import {ContactComponent} from './componentes/contact/contact.component' ;
import {CreateComponent} from './componentes/create/create.component' ;
import {ProjectsComponent} from './componentes/projects/projects.component' ;


//Array de rutas
const routes: Routes =[
    {path: '', component: HomeComponent},
    {path: 'sobre-mi', component: AboutComponent},
    {path: 'proyectos', component: ProjectsComponent},
    {path: 'crear-proyecto', component: CreateComponent},
    {path: 'contacto', component: ContactComponent},
    {path: '**', component: HomeComponent } //ruta por default 404
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
//Exportar el modulo del router
export class AppRoutingModule { }
