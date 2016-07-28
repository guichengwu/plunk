import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { NytimesComponent } from './Nytimes.component';
import {TestComponent} from './test.component';

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '../test.html',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  }, 
  {
    path: 'nytimes',
    component: NytimesComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/