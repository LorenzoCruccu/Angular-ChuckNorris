import {Component, Input, DoCheck, OnChanges, SimpleChanges} from '@angular/core';
import {Jokes, ValueEntity} from '../shared/prova.service';
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

    <tr *ngFor="let joke of jokes">
      <td> <a [routerLink]="['result', joke.id]">{{ joke.id }} </a></td>
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
  headers = ['id', 'categoria'];

 jokes: ValueEntity[];

 constructor(private provaService: ProvaService) {
 }

  ngOnChanges(changes: SimpleChanges) {
     this.provaService.getJokes().subscribe(data => {
       this.jokes = data.value;
       console.log(data);
     });

  }

}
