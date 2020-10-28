import {Component} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <nav class="navbar navbar-expand-sm bg-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['']" routerLinkActive="text-warning" [routerLinkActiveOptions]="{exact: true}">Home</a>
        </li>
      </ul>
    </nav>

  `
})
export class NavBarComponent{

}
