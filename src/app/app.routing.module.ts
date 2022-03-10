import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes=[
  { path: 'estudiantes', loadChildren: () => import('./pages/estudiantes/estudiantes.module').then(m => m.EstudiantesModule) },
  { path: 'personajes', loadChildren: () => import('./pages/personajes/personajes.module').then(m => m.PersonajesModule) },
  { path: 'crear', loadChildren: () => import('./pages/estudiantes/crear/crear.module').then(m => m.CrearModule) },
  { path: 'profesores', loadChildren: () => import('./pages/profesores/profesores.module').then(m => m.ProfesoresModule) },  
  {path:'**',redirectTo:'',pathMatch:'full'}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
