import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from "@angular/material/input";
import {MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule,MatTableDataSource } from "@angular/material/table";
import { MatPaginatorModule  } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,MatIconModule,MatButtonModule,MatDividerModule,MatSidenavModule,
    MatTableModule,MatInputModule, MatProgressSpinnerModule, 
    MatSortModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatMenuModule
  ],
  exports:[
    MatToolbarModule,MatIconModule,MatButtonModule,MatDividerModule,MatSidenavModule,
    MatTableModule,MatInputModule, MatProgressSpinnerModule, 
    MatSortModule,MatCardModule,MatSelectModule,MatMenuModule
 
  ]
})
export class AngularmaterialModule { }
