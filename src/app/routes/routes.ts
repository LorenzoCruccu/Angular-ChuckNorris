import { Routes } from '@angular/router';
import {FilterComponent} from '../filter/filter.component';
import {ResultComponent} from '../result/result.component';

export const appRoutes: Routes = [
  { path: '', component: FilterComponent },
  { path: 'result/:jokeID', component: ResultComponent }
];
