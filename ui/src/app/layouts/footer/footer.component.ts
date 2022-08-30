import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  // set the currenr year
  year: number = new Date().getFullYear();
  constructor() {
    //Describe your code here
  }
  ngOnInit(): void {
    //Describe your code here
  }
}