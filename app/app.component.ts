import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { HeroService }        from './hero.service';

@Component({
  selector: 'my-app',

  template: `
    <h1>{{title}}</h1>
    <nav id="cbp-hrmenu" class="cbp-hrmenu">
    <ul>
      <li><a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a></li>
      <li><a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a></li>
      <li><a [routerLink]="['/nytimes']" routerLinkActive="active">Ny Times</a></li>
            <li><a [routerLink]="['/test']" routerLinkActive="active">Test</a></li>
    </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService,
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/