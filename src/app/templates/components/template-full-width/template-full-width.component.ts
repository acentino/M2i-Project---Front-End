import { Component } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent {
  @Input() public title: string;

  constructor() {
    this.title = 'Baggy';
  }
}
