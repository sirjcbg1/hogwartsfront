import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { tap } from 'rxjs/operators';
import { DataGrid } from  '../../interfaces/datagrid';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator  } from '@angular/material/paginator';
import {FormControl} from '@angular/forms';

const ELEMENT_DATA: DataGrid[] = [];
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})

export class PersonajesComponent implements AfterViewInit  {
  displayedColumns: string[] = ['name','dateOfBirth','patronus', 'image'];
  public dataSource!: MatTableDataSource<DataGrid>;
  houses = new FormControl();

  housesList: string[] = [ 'Slytherin', 'Gryffindor', 'Ravenclaw', 'Hufflepuff'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private personajeSevice: PersonajesService) { }
  ngAfterViewInit(): void {

   
  }

    onChangeofOptions(house: string) {

      this.personajeSevice.getPersonajes(house).pipe(
        tap(res=>{
          this.dataSource = new MatTableDataSource<DataGrid>(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        })
      ).subscribe();

    }




}
