import {Component, ViewEncapsulation} from '@angular/core';


@Component({
   selector: 'sidenav-demo',
  templateUrl: './sidenav-demo.html',
  styleUrls: ['./sidenav-demo.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavDemo {
  side = 'start';
}
