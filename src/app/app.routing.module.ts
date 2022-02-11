import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './shared/grid/grid.component';

const routes : Routes=[
  { path: 'estudiantes', loadChildren: () => import('./pages/estudiantes/estudiantes.module').then(m => m.EstudiantesModule) },
  { path: 'personajes', loadChildren: () => import('./pages/personajes/personajes.module').then(m => m.PersonajesModule) },
  {path:'**',redirectTo:'',pathMatch:'full'}

];

@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
