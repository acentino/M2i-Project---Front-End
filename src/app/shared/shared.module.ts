import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';



@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [TemplatesModule, IconsModule],
})
export class SharedModule {}
