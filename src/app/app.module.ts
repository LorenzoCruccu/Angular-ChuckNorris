import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FilterComponent} from './filter/filter.component';
import {TableComponent} from './table/table.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ProvaService} from './shared/prova.service';
@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProvaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
