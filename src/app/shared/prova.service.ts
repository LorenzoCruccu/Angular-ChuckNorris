import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

  getJokes(){
  return this.http.get(this.url);
  }
}
