import { Component, OnInit } from '@angular/core';
import { Router }           from '@angular/router';
import { Headers, Http, Jsonp, URLSearchParams, JSONP_PROVIDERS, Response } from '@angular/http';
import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  data:any;
  constructor(
    private router: Router,
    private http: Http,
    private jsonp: Jsonp,
    private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero) {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

  searchArticle() {
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    let params = new URLSearchParams();

    params.set('api-key', '033a69688a1a4d24ab0ccdd5090da5c6');
    params.set('fq', 'blackrock');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp.get(url, {search: params})
        .map(responseData => {
          console.log(responseData);
          return responseData;
        })
        .subscribe(result => {
          this.data = result;
        });
  }
}