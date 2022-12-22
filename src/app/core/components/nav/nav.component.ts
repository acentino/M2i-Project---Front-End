import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Channel } from '../../models/channel';
import { ChannelsService } from '../../services/channels.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  public collection$: Observable<Channel[]>;

  constructor(private channelsService: ChannelsService) {
      this.collection$ = this.channelsService.collection$;
  }
}
