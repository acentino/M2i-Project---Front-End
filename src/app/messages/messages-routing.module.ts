import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddMessageComponent } from './pages/page-add-message/page-add-message.component';
import { PageEditMessageComponent } from './pages/page-edit-message/page-edit-message.component';
import { PageListMessagesComponent } from './pages/page-list-messages/page-list-messages.component';

const routes: Routes = [
  { path: ':id', component: PageListMessagesComponent },
  { path: 'add', component: PageAddMessageComponent },
  { path: 'edit', component: PageEditMessageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoutingModule {}
