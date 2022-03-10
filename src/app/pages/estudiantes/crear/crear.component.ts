import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder,AbstractControl, FormGroup, Validators} from '@angular/forms';
import { DataGrid } from  '../../../interfaces/datagrid';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator  } from '@angular/material/paginator';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  displayedColumns: string[] = ['name','dateOfBirth','patronus', 'image'];
  form!:FormGroup;
  submitted = false;
  dataGrid:DataGrid[]=[];
  data!:DataGrid;

  public dataSource!: MatTableDataSource<DataGrid>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private formBuilder: FormBuilder) {
    


   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['',Validators.required],
      patronus: ['',Validators.required],
      age: ['',Validators.required], 
      image: ['',Validators.required] 
 
    });
    this.fillGrid();
  }
  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    else{
      this.save(
        {
          name:this.form.value.name,
          image:this.form.value.image,
          dateOfBirth:this.form.value.age,
          patronus:this.form.value.patronus
        }
      );
    }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  save(data:DataGrid){
    this.dataGrid.push(data);
    localStorage.setItem('dataTmp', JSON.stringify(this.dataGrid));
    this.fillGrid();
  }

  fillGrid(){
    var getObj = JSON.parse(localStorage.getItem("dataTmp")|| '{}');
    this.dataSource = new MatTableDataSource<DataGrid>(getObj);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

}
