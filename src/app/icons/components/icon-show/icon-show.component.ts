import { Component } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-show',
  templateUrl: './icon-show.component.html',
  styleUrls: ['./icon-show.component.scss']
})
export class IconShowComponent {
  icon = faEye;
  ngOnInit() {}
}
