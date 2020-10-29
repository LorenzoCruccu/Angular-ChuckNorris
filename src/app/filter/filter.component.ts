import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter',
  template: `
    <div class="container">
     <h1> Seleziona i filtri</h1>
      <br>
      <div class="form-check-inline">
        <label class="form-check-label"> <input type="checkbox" id="nerdy" [(ngModel)]="nnnerdy"> Nerdy</label>
      </div>
      <div class="form-check-inline">
        <label class="form-check-label"> <input type="checkbox" id="explicit" [value]="eeexplicit" (change)="aggiornaExplicit($event)">Explicit</label>
      </div>
      <br>
      <app-table  [nnnerdy]="nnnerdy"  [eeexplicit]="eeexplicit"></app-table>
    </div>

  `
})
export class FilterComponent implements OnInit{

  nnnerdy: boolean;
  eeexplicit: boolean;

  ngOnInit(){
    this.nnnerdy = false;
    this.eeexplicit = false;

  }


 // aggiornaNerdy(n){
    // console.log((bo.target as Element).id);
   // this.dati.nerdy = n.currentTarget.checked;
  //  console.log(this.dati.nerdy);
 // }
  aggiornaExplicit(b){
    this.eeexplicit = b.currentTarget.checked;
  }



}
