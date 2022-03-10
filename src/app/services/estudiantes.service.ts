import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataGrid } from  '../interfaces/datagrid';
@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  private url=localStorage.getItem('apiUrl');
  constructor(private http:HttpClient) {
  }
  getEstudiantes():Observable<DataGrid[]>{
    return this.http.get<DataGrid[]>(this.url+"/students");    
  }
}
