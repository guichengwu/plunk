/**
 * Created by guichengwu on 7/17/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var article_1 = require('./article');
var NytimesComponent = (function () {
    function NytimesComponent(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
    }
    NytimesComponent.prototype.ngOnInit = function () {
    };
    NytimesComponent.prototype.searchArticle = function () {
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        var params = new http_1.URLSearchParams();
        params.set('api-key', "033a69688a1a4d24ab0ccdd5090da5c6");
        params.set('fq', "blackrock");
        return this.jsonp
            .get(url, { search: params })
            .map(function (responseData) {
            return responseData.json();
        })
            .map(function (articles) {
            var result = [];
            if (articles) {
                articles.forEach(function (article) {
                    result.push(new article_1.Article(article.weburl));
                });
            }
        })
            .subscribe(function (result) {
            //this.articles = result;
        });
    };
    NytimesComponent = __decorate([
        core_1.Component({
            selector: 'nytimes',
            templateUrl: 'app/nytimes.component.html',
            providers: [http_1.JSONP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [http_1.Jsonp, http_1.Http])
    ], NytimesComponent);
    return NytimesComponent;
}());
exports.NytimesComponent = NytimesComponent;
//# sourceMappingURL=Nytimes.component.js.map