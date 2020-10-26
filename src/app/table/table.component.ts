import {Component, Input, OnInit} from '@angular/core';
import {Jokes} from '../shared/prova.service';
import {ProvaService} from '../shared/prova.service';

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
export class TableComponent implements OnInit{
  @Input() prendoDati: any;
  url = 'http://api.icndb.com/jokes';
  // possibile json recuperato col service
  headers = ['id', 'categoria'];

 jokes: any;

 constructor(private provaService: ProvaService) {
 }

  ngOnInit(){
    this.provaService.getJokes().subscribe(data => {
      this.jokes = data;
      console.log(data);
    });
  }

}
