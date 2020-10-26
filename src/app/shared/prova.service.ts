import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export interface Jokes {
  type: string;
  value?: (ValueEntity)[] | null;
}
export interface ValueEntity {
  id: number;
  joke: string;
  categories?: (string | null)[] | null;
}

@Injectable()
export class ProvaService{
  jokes: Jokes[];
    constructor(private http: HttpClient) {
    }
  url = 'http://api.icndb.com/jokes';

  getJokes(): Observable<Jokes>{
  return this.http.get(this.url).pipe(map( res => {
    return res as Jokes;
  }));
  }
}
