import {LiveAnnouncer} from '@angular/cdk/a11y';
import { AfterViewInit,Component, Input, ViewChild  } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { DataGrid } from 'src/app/interfaces/datagrid';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})


export class GridComponent implements AfterViewInit{
  @Input() dataService:any=[];
  public edad!:number;
  displayedColumns: string[] = ['name','dateOfBirth','patronus', 'image'];
  public dataSource!: MatTableDataSource<DataGrid>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  ngAfterViewInit(): void {
   
  }    

   getAge(dateString:string):any
  {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
      {
          age--;
      }
      if(Number.isNaN(age)){
        return '';
  
      }
      return age;
  }

}
