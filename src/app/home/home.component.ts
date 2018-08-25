import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bm-home',
  template: `
    <h1>Home</h1>
    <p>Hier ist der BookMonkey</p>
    <button routerLink="/books" class="ui red button">Buchliste ansehen
    <i class="right arrow icon"></i>
    </button>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
