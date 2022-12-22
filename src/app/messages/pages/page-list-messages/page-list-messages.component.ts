import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from 'src/app/core/models/message';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-page-list-messages',
  templateUrl: './page-list-messages.component.html',
  styleUrls: ['./page-list-messages.component.scss']
})
export class PageListMessagesComponent {
  public channelMessages$!: BehaviorSubject<Message[]>;
  public channelName!: string;
  public channelId!: number;


  constructor(private messagesService: MessagesService){
    this.channelMessages$ = this.messagesService.channelMessages$;
    messagesService.channelName.subscribe( (data) => this.channelName = data);
    messagesService.channelId.subscribe( (data) => this.channelId = data);
  }

}
