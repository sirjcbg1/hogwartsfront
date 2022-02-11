import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EstudiantesComponent } from './estudiantes.component';


const routes: Routes = [
  { path: '', component: EstudiantesComponent }
];

@NgModule({
  declarations: [
    EstudiantesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EstudiantesModule { }
