import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';

import { InMemoryCandidatesDataService }  from './service/in-memory-data.service';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import {PanelModule} from 'primeng/panel';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {GridComponent} from './grid/grid.component';
import {CandidateDetailsService} from './service/candidatedetails/candidatedetails.service';
import {EmployeeComponent} from './employee/employee.component';
import {ReferPopupComponent} from './refer-popup/refer-popup.component';
import {RatingModule} from 'primeng/rating';

const routes: Routes = [

  // { path: 'form',component: UserFormComponent  },
  { path: 'grid', component: GridComponent },
  { path: 'login', component:  LoginComponent },
  { path: 'dashboard', component:  EmployeeComponent },
  { path: 'refer', component:  ReferPopupComponent },
  { path: '',  redirectTo: '/login', pathMatch: 'full'  },
  
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    GridComponent,
    EmployeeComponent,
    ReferPopupComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    PanelModule,  
    AccordionModule,
    TableModule,
    HttpClientModule,
    DialogModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryCandidatesDataService),
    RouterModule.forRoot(routes),  
    RatingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [CandidateDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
