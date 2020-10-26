import {Component} from '@angular/core';

@Component({
  selector: 'app-filter',
  template: `
    <div>
     <h1> Component Filter</h1>
      <br>
      <input type="checkbox" id="nerdy" [(ngModel)]="dati.nerdy" >
      <label for="nerdy"> Nerdy</label>

      <input type="checkbox" id="explicit" [value]="dati.explicit"  (change)="aggiornaExplicit($event)" >
      <label for="explicit"> Explicit</label>
      <br>

      <app-table [prendoDati]="dati"></app-table>
    </div>

  `
})
export class FilterComponent{
  dati = {
    nerdy: false,
    explicit: false
  };
  aggiornaNerdy(n){
    //console.log((bo.target as Element).id);
    this.dati.nerdy = n.currentTarget.checked;
    console.log(this.dati.nerdy);
  }
  aggiornaExplicit(b){
    this.dati.explicit = b.currentTarget.checked;
  }



}
