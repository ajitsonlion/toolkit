import {Component} from '@angular/core';
import {LiveAnnouncer} from '@angular/material';

@Component({
   selector: 'live-announce-demo',
  templateUrl: './live-announcer-demo.html',
})
export class LiveAnnouncerDemo {

  constructor(private live: LiveAnnouncer) {}

  announceText(message: string) {
    this.live.announce(message);
  }

}
