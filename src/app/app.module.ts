import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,  
    RouterModule.forRoot([]),  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
