import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personajes } from  '../interfaces/personajes';
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private url=localStorage.getItem('apiUrl');
  constructor(private http:HttpClient) {
  }

  getPersonajes(house:string):Observable<Personajes[]>{
    return this.http.get<Personajes[]>(this.url+"/house/"+house);
  //  return this.http.get<Personajes[]>('http://hp-api.herokuapp.com/api/characters/house/slytherin');

    
  }
}
