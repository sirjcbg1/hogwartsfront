import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PersonajesComponent } from './personajes.component';


const routes: Routes = [
  { path: '', component: PersonajesComponent }
];

@NgModule({
  declarations: [
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PersonajesModule { }
