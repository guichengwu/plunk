/**
 * Created by guichengwu on 7/17/16.
 */

import { Component, OnInit } from '@angular/core';
import { Headers, Http, Jsonp, URLSearchParams, JSONP_PROVIDERS, Response, RequestOptions} from '@angular/http';
import { Article } from './article';
import '../js/test.js';

declare var drawGraph: any;
declare var d3: any;
declare var nv: any;
@Component({
    selector: 'nytimes',
    templateUrl: 'app/nytimes.component.html',
    styleUrls: ['../styles.css'],
    providers: [ JSONP_PROVIDERS ],
    directives: []

})



export class NytimesComponent implements OnInit {

    constructor(private jsonp: Jsonp, private http: Http) { }

    articles: Array<Article>;
    data: any;



    ngOnInit() {
        var dataset = [
            {label: 'Abulia', count: 10},
            {label: 'Betelgeuse', count: 20},
            {label: 'Cantaloupe', count: 30},
            {label: 'Dijkstra', count: 40}
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
            .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')');

        var arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);

        var pie = d3.pie()
            .value(function(d:any) { return d.count; })
            .sort(null);

        var path = svg.selectAll('path')
            .data(pie(dataset))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function(d:any, i:any) {
                return color(d.data.label);
            });
    }
}
