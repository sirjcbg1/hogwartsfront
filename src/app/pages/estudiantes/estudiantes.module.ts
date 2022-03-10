import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EstudiantesComponent } from './estudiantes.component';
import { AngularmaterialModule } from 'src/app/angularmaterial.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GridModule } from 'src/app/shared/grid/grid.module';


const routes: Routes = [
  { path: '', component: EstudiantesComponent }
];

@NgModule({
  declarations: [
    EstudiantesComponent
  ],
  imports: [
    CommonModule,
    AngularmaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    GridModule,
    RouterModule.forChild(routes)
  ]
})
export class EstudiantesModule { }
