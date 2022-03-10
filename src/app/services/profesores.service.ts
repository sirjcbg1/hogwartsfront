import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataGrid } from  '../interfaces/datagrid';
@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  private url=localStorage.getItem('apiUrl');
  constructor(private http:HttpClient) {
  }
  getProfesores():Observable<DataGrid[]>{
    return this.http.get<DataGrid[]>(this.url+"/staff");    
  }
}
