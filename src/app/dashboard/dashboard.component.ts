import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  static label = 'So Much Room for Activities!';

  title = 'Smart School Admin';
  showNav = true;
  router: string;
  chart1 = [];
  chart2 = [];
  constructor(private _router: Router) {
    this.router = _router.url; 
  }
  
  ngOnInit() {
    this.chart1 = new Chart('barchart', {
      type: 'bar',
      data: {
        labels:  ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [
          {
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',

          }
        ]
      }
    })


    this.chart2 = new Chart('linechart', {
      type: 'line',
      data: {
        labels:  ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [
          {
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            fill: false
          },
          {
            data: [65, 99, 20, 51, 56, 25, 60],
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 199, 152)',
            borderColor: 'rgb(255, 199, 152)',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }]
      }
    })
  
  }

}
