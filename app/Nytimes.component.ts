/**
 * Created by guichengwu on 7/17/16.
 */

import { Component, OnInit } from '@angular/core';
import { Headers, Http, Jsonp, URLSearchParams, JSONP_PROVIDERS } from '@angular/http';

@Component({
    selector: 'nytimes',
    templateUrl: 'app/nytimes.component.html',
    providers: [ JSONP_PROVIDERS ]

})



export class NytimesComponent implements OnInit {

    constructor(private jsonp: Jsonp, private http: Http) { }
    





    ngOnInit() {

    }

    public articles;
    searchArticle() {
        let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        let params = new URLSearchParams();

        params.set('api-key', "033a69688a1a4d24ab0ccdd5090da5c6");
        params.set('fq', "blackrock");

        return this.jsonp
            .get(url, {search: params })
            .map(res => {
                res.json()
            })
            .subscribe(data => {
                this.articles = data;
                console.info(data);
                console.log(data);

            });

    }

}
