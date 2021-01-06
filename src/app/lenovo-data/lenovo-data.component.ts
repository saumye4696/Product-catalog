import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lenovo-data',
  templateUrl: './lenovo-data.component.html',
  styleUrls: ['./lenovo-data.component.css']
})
export class LenovoDataComponent implements OnInit {
  // lenovoLaptops = [
  //   { name : "Thinkpad", model : "T14"},
  //   { name : "Yoga", model : "C950"}
  // ]
  route : Router;

  laptops = {
    "lenovo":[
        {
          "name":"Thinkpad",
          "model":"T14s"
        },
        {
          "name":"Yoga",
          "model":"C940"
        },
        {
          "name":"Ideapad",
          "model":"S340"
        }
      ],
      
    "asus":[
        {
          "name":"Zephyrus",
          "model":"G14"
        },
        {
          "name":"Zenbook",
          "model":"X3"
        }
    ]
      
      
  }

  constructor(private _route : Router) { 
    this.route = _route;
  }

  ngOnInit(): void {
  }

}
