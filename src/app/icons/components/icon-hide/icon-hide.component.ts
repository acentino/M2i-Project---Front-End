import { Component } from '@angular/core';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-hide',
  templateUrl: './icon-hide.component.html',
  styleUrls: ['./icon-hide.component.scss']
})
export class IconHideComponent {
  icon = faEyeSlash;
  ngOnInit() {}
}
