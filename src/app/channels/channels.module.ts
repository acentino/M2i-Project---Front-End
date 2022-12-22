import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChannelsRoutingModule } from './channels-routing.module';
import { FormChannelComponent } from './components/form-channel/form-channel.component';
import { PageAddChannelComponent } from './pages/page-add-channel/page-add-channel.component';
import { PageEditChannelComponent } from './pages/page-edit-channel/page-edit-channel.component';
import { PageListChannelsComponent } from './pages/page-list-channels/page-list-channels.component';


@NgModule({
  declarations: [
    PageListChannelsComponent,
    PageAddChannelComponent,
    PageEditChannelComponent,
    FormChannelComponent,
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ChannelsModule { }
