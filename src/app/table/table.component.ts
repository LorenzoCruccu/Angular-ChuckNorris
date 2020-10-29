import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ValueEntity} from '../shared/prova.service';
import {ProvaService} from '../shared/prova.service';

@Component({
  selector: 'app-table',
  template: ` <div class="text-center bg-light"><h1>App-Table Component</h1>
  <h3>Filtri:</h3>
    <h4>
    <p [ngClass]="{ 'text-success': nnnerdy}"> Filtro Nerdy: {{nnnerdy === true ? 'Attivato' : 'Disattivato'}}</p>
    <p [ngClass]="{ 'text-success': eeexplicit}"> Filtro Explicit: {{eeexplicit === true ? 'Attivato' : 'Disattivato'}}</p>
    </h4>
    <div class="text-danger"> <a [routerLink]="[ 'result', random ]"> Random?</a></div>

  <h2>Tabella</h2>
  <table border="1px" class="table table-hover table-striped" >
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
  @Input() eeexplicit: boolean;
  @Input() nnnerdy: boolean;
  headers = ['ID', 'Categoria'];

 jokes: ValueEntity[];
 random: number;
 constructor(private provaService: ProvaService) {
 }
 doRandom(){
   this.provaService.getRandomJoke().subscribe(data => {
     this.random = data.value?.id;
   });
 }

 ngOnInit(){
   this.doRandom();
 }
  ngOnChanges(changes: SimpleChanges) {
   console.log( 'explicit: ' + this.eeexplicit);
   console.log( 'nerdy:' + this.nnnerdy);
   if (this.eeexplicit === true && this.nnnerdy === true){
     this.provaService.getNerdyExplicitJokes().subscribe(data => {
       this.jokes = data.value;
       console.log(data);
     });
   }
   else if (this.eeexplicit === true){
     this.provaService.getExplicitJokes().subscribe(data => {
       this.jokes = data.value;
       console.log(data);
     });
   }
   else if (this.nnnerdy === true){
     this.provaService.getNerdyJokes().subscribe(data => {
       this.jokes = data.value;
       console.log(data);
     });
   }
   else{
     this.provaService.getJokes().subscribe(data => {
       this.jokes = data.value;
       console.log(data);
     });
   }
  }


}
