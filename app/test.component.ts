/**
 * Created by guichengwu on 7/27/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';


import { Hero }                from './hero';
import { HeroService }         from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
    selector: 'my-test',
    templateUrl: 'app/test.component.html',
    styleUrls:  ['app/heroes.component.css'],
    directives: []
})
export class TestComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    addingHero = false;
    error: any;
    w: any;
    constructor(
        private router: Router,
        private heroService: HeroService) {

    }

    drawChart() {
    var data = this.w.google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ]);

    var options = {
        title: 'My Daily Activities',
        is3D: true,
    };

    var chart = new this.w.google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
}

    ngOnInit() {
        this.w = window;
        if (!this.w.google) {
            alert('fuck');
        } else {
            alert('fuck good');
        }

        this.drawChart();

    }

}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */