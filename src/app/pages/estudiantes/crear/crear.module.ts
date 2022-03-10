import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CrearComponent } from './crear.component';
import { AngularmaterialModule } from 'src/app/angularmaterial.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GridModule } from 'src/app/shared/grid/grid.module';


const routes: Routes = [
  { path: '', component: CrearComponent }
];

@NgModule({
  declarations: [
    CrearComponent
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
export class CrearModule { }
