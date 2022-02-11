import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { tap } from 'rxjs/operators';
import { Personajes } from  '../../interfaces/personajes';
const ELEMENT_DATA: Personajes[] = [];
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})

export class PersonajesComponent implements OnInit {
  private personajes!:Personajes[];
  displayedColumns: string[] = ['name','age','patronus', 'image'];
  dataSource = ELEMENT_DATA;
  constructor(private personajeSevice: PersonajesService) { }

  ngOnInit(): void {
    this.personajeSevice.getPersonajes("slytherin").pipe(
      tap(res=>console.log(res))

    ).subscribe();
  }

}
