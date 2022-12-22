import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { BtnComponent } from './components/btn/btn.component';



@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [TemplatesModule, IconsModule, BtnComponent],
  declarations: [
    BtnComponent
  ],
})
export class SharedModule {}
