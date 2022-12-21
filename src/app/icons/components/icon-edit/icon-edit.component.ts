import { Component } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-edit',
  templateUrl: './icon-edit.component.html',
  styleUrls: ['./icon-edit.component.scss']
})
export class IconEditComponent {
  icon = faPencil;
  ngOnInit() {}

}
