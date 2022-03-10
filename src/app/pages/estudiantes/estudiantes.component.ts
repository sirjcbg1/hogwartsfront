import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { tap } from 'rxjs/operators';
import { DataGrid } from  '../../interfaces/datagrid';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator  } from '@angular/material/paginator';
import {FormControl} from '@angular/forms';
const ELEMENT_DATA: DataGrid[] = [];
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements AfterViewInit  {
  displayedColumns: string[] = ['name','dateOfBirth','patronus', 'image'];
  public dataSource!: MatTableDataSource<DataGrid>;
  form = new FormControl();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private estudiantes: EstudiantesService) { }

  ngAfterViewInit(): void {
    this.estudiantes.getEstudiantes().pipe(
      tap(res=>{
        this.dataSource = new MatTableDataSource<DataGrid>(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    ).subscribe();

   
  }

}
