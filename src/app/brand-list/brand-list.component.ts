import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  brandList = [
    { name : "lenovo", series : "thinkpad"},
    { name : "asus", series : "zephyrus"}
  ];
  


  constructor() { }

  ngOnInit(): void {
  }

}
