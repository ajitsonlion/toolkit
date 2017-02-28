import {Component} from '@angular/core';
import {Platform, getSupportedInputTypes} from '@angular/material';


@Component({
   selector: 'platform-demo',
  templateUrl: './platform-demo.html',
})
export class PlatformDemo {
  supportedInputTypes = getSupportedInputTypes();

  constructor(public platform: Platform) {}
}
