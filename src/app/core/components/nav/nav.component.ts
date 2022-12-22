import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Channel } from '../../models/channel';
import { ChannelsService } from '../../services/channels.service';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  public collection$: Observable<Channel[]>;

  constructor(private channelsService: ChannelsService, private router:Router, private messagesService: MessagesService) {
      this.collection$ = this.channelsService.collection$;
  }

  public goToChannel(channelName: string, channelId: number):void{
    this.messagesService.getMessagesByChannel(channelId);
    this.messagesService.channelName.next(channelName);
    this.messagesService.channelId.next(channelId);
    this.router.navigate(['messages',channelId]);
  }
}
