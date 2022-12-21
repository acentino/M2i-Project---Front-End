import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { PageListMessagesComponent } from './pages/page-list-messages/page-list-messages.component';
import { PageAddMessageComponent } from './pages/page-add-message/page-add-message.component';
import { PageEditMessageComponent } from './pages/page-edit-message/page-edit-message.component';


@NgModule({
  declarations: [
    PageListMessagesComponent,
    PageAddMessageComponent,
    PageEditMessageComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
