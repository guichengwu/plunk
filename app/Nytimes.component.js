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
require('../js/test.js');
var NytimesComponent = (function () {
    function NytimesComponent(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
    }
    NytimesComponent.prototype.ngOnInit = function () {
        var dataset = [
            { label: 'Abulia', count: 10 },
            { label: 'Betelgeuse', count: 20 },
            { label: 'Cantaloupe', count: 30 },
            { label: 'Dijkstra', count: 40 }
        ];
        var width = 360;
        var height = 360;
        var radius = Math.min(width, height) / 2;
        var color = d3.scaleOrdinal(d3.schemeCategory20b);
        var svg = d3.select('#chart')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');
        var arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);
        var pie = d3.pie()
            .value(function (d) { return d.count; })
            .sort(null);
        var path = svg.selectAll('path')
            .data(pie(dataset))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function (d, i) {
            return color(d.data.label);
        });
    };
    NytimesComponent = __decorate([
        core_1.Component({
            selector: 'nytimes',
            templateUrl: 'app/nytimes.component.html',
            styleUrls: ['../styles.css'],
            providers: [http_1.JSONP_PROVIDERS],
            directives: []
        }), 
        __metadata('design:paramtypes', [http_1.Jsonp, http_1.Http])
    ], NytimesComponent);
    return NytimesComponent;
}());
exports.NytimesComponent = NytimesComponent;
//# sourceMappingURL=Nytimes.component.js.map