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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var hero_service_1 = require('./hero.service');
var DashboardComponent = (function () {
    function DashboardComponent(router, http, jsonp, heroService) {
        this.router = router;
        this.http = http;
        this.jsonp = jsonp;
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    DashboardComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.id];
        this.router.navigate(link);
    };
    DashboardComponent.prototype.searchArticle = function () {
        var _this = this;
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        var params = new http_1.URLSearchParams();
        params.set('api-key', '033a69688a1a4d24ab0ccdd5090da5c6');
        params.set('fq', 'blackrock');
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get(url, { search: params })
            .map(function (responseData) {
            console.log(responseData);
            return responseData;
        })
            .subscribe(function (result) {
            _this.data = result;
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/dashboard.component.html',
            styleUrls: ['app/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, http_1.Jsonp, hero_service_1.HeroService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map