import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconShowComponent } from './components/icon-show/icon-show.component';
import { IconHideComponent } from './components/icon-hide/icon-hide.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';

@NgModule({
  declarations: [IconCloseComponent, IconShowComponent, IconHideComponent, IconDeleteComponent, IconEditComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [IconCloseComponent, IconShowComponent, IconHideComponent, IconDeleteComponent, IconEditComponent],
})
export class IconsModule {}
