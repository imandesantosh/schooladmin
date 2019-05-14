import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  taskList: any;
  
  constructor() { }

  ngOnInit() {
    this.taskList = [{
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "success"
    },
    {
      "id": 1,
      "content": "This is the task!!!",
      "status": false,
      "priority": "info"
    },
    {
      "id": 2,
      "content": "This is the task!!!",
      "status": true,
      "priority": "warning"
    },
    {
      "id": 4,
      "content": "This is the task!!!",
      "status": false,
      "priority": "danger"
    },
    {
      "id": 4,
      "content": "This is the task!!!",
      "status": true,
      "priority": "primary"
    },
    {
      "id": 5,
      "content": "This is the task!!!",
      "status": false,
      "priority": "secondary"
    },
    {
      "id": 6,
      "content": "This is the task!!!",
      "status": true,
      "priority": "dark"
    }, {
      "id": 0,
      "content": "This is the task!!!",
      "status": true,
      "priority": "success"
    }]
  
  }

}
