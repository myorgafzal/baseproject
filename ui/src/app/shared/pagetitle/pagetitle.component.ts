import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-pagetitle',
  templateUrl: './pagetitle.component.html'
})

/**
 * Page Title Component
 */
export class PagetitleComponent implements OnInit {

  @Input()
  breadcrumbItems!: Array<{
    active?: boolean;
    label?: string;
  }>;

  @Input() title: string | undefined;

  constructor() {
    //Describe your code here
  }

  ngOnInit(): void {
    //Describe your code here
  }
}
