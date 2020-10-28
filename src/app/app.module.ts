import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FilterComponent} from './filter/filter.component';
import {TableComponent} from './table/table.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ProvaService} from './shared/prova.service';
import {appRoutes} from './routes/routes';
import {RouterModule} from '@angular/router';
import {ResultComponent} from './result/result.component';
import {NavBarComponent} from './navBar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    TableComponent,
    ResultComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProvaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
