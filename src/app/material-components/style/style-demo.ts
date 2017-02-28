import {Component, Renderer} from '@angular/core';
import {FocusOriginMonitor} from '@angular/material';


@Component({
   selector: 'style-demo',
  templateUrl: './style-demo.html',
  styleUrls: ['./style-demo.scss'],
})
export class StyleDemo {
  constructor(public renderer: Renderer, public fom: FocusOriginMonitor) {}
}
