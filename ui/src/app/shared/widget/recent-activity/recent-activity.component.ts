import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html'
})

export class RecentActivityComponent implements OnInit {

  @Input() recentActivity: Array<{
    icon?: string;
    date?: number;
    content?: string;
    coine?: string;
    price?: string;
  }> | undefined;

  constructor() {
    //Describe your code here
  }

  ngOnInit(): void {
    //Describe your code here
  }
}