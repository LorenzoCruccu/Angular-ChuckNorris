import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-table',
  template: ` <div align="center"><h1>Qui sono su app-table</h1>
  <h3>Dati:
    <p> Filtro Nerdy: {{prendoDati.nerdy}}</p>
    <p> Filtro Explicit: {{prendoDati.explicit}}</p>
  </h3>


  <h2>Tabella</h2>
  <table border="1px" align="center">
    <thead>
    <th *ngFor="let header of headers">
      {{header}}
    </th>
    </thead>
    <tbody>

    <tr *ngFor="let joke of jokes.value">
      <td>{{ joke.id }}</td>
      <td>{{ joke.categories[0] }}</td>
    </tr>
    </tbody>
  </table>
    </div>
  `
})
export class TableComponent implements OnChanges{
  @Input() prendoDati: any;
  url = 'http://api.icndb.com/jokes';
  // TODO fare metodo per prendere json
  // possibile json recuperato col service
  headers = ['joke', 'categoria'];

   jokes: any = [];
  constructor(private http: HttpClient) {

  }

  getData(){
    const url = 'http://api.icndb.com/jokes';
    this.http.get(url).subscribe((res) => {
      this.jokes = res;
      console.log(this.jokes);
    });
  }
  ngOnChanges() {
    this.getData();
  }

}
