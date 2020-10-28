import {Component, OnInit} from '@angular/core';
import {ProvaService, ValueEntity} from '../shared/prova.service';
import { ActivatedRoute } from '@angular/router';

@Component({

  template:  `
    <div class="container">
      <blockquote class="blockquote"> <h1 class="display-4"> Joke: {{jokes[0]?.joke}} </h1> </blockquote>
      <footer class="blockquote-footer"> <h4> Chuck Norris </h4></footer>
    </div>

  `
})
export class ResultComponent implements OnInit{
  constructor(private provaService: ProvaService, private activatedRoute: ActivatedRoute) {
  }

  jokes: ValueEntity[];

  ngOnInit(){
    this.provaService.getSingleJoke(+this.activatedRoute.snapshot.params['jokeID']).subscribe(data => {
      this.jokes = data.value;
      console.log(data);
    });
  }


}
