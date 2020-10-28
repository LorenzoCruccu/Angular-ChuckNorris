import {Component, OnInit} from '@angular/core';
import {ProvaService, ValueEntity} from '../shared/prova.service';
import { ActivatedRoute } from '@angular/router';

@Component({

  template:  `
  <blockquote> Joke: {{jokes[0]?.joke}}</blockquote>
  <footer class="blockquote-footer">Chuck Norris</footer>
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
