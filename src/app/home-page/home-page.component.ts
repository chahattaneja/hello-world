import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  archives= [
    {
      year: 2020,
      month: 1
    },
    {
      year: 2020,
      month: 2
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
