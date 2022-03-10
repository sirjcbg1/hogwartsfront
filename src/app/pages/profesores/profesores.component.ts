import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { tap } from 'rxjs/operators';
import { DataGrid } from  '../../interfaces/datagrid';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator  } from '@angular/material/paginator';
import {FormControl} from '@angular/forms';
const ELEMENT_DATA: DataGrid[] = [];


@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements AfterViewInit  {
  displayedColumns: string[] = ['name','dateOfBirth','patronus', 'image'];
  public dataSource!: MatTableDataSource<DataGrid>;
  form = new FormControl();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private profesores: ProfesoresService) { }

  ngAfterViewInit(): void {
    this.profesores.getProfesores().pipe(
      tap(res=>{
        this.dataSource = new MatTableDataSource<DataGrid>(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    ).subscribe();

   
  }


}
