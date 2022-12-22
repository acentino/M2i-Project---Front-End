import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Channel } from 'src/app/core/models/channel';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-page-edit-channel',
  templateUrl: './page-edit-channel.component.html',
  styleUrls: ['./page-edit-channel.component.scss']
})
export class PageEditChannelComponent {
  public channel : Channel;

  constructor(private channelsService : ChannelsService, private router : Router){
    this.channel= new Channel();
  }

  public action(channel: Channel) {
    channel.user = {
      id: 1,
      userName: "User",
      email: "user@baggy.com"
    }
    console.log();

      this.channelsService.edit(channel).subscribe(() => {
      this.router.navigate(['channels']);
    });

  }
}
