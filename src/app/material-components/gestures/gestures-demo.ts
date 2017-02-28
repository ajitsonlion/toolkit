import {Component} from '@angular/core';

@Component({
   selector: 'gestures-demo',
  templateUrl: './gestures-demo.html',
  styleUrls: ['./gestures-demo.scss'],
})
export class GesturesDemo {
  dragCount: number = 0;
  panCount: number = 0;
  pressCount: number = 0;
  longpressCount: number = 0;
  swipeCount: number = 0;
  slideCount: number = 0;
}
