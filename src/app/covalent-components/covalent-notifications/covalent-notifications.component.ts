import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covalent-notifications',
  templateUrl: './covalent-notifications.component.html',
  styleUrls: ['./covalent-notifications.component.scss']
})
export class CovalentNotificationsComponent implements OnInit {


  notificationsAttrs: Object[] = [{
    description: `Number for the notification count.
                  Shows number if the input is a positive number; shows no count state if boolean is "true"`,
    name: 'notifications',
    type: 'number | boolean',
  }, {
    description: `Sets the theme color of the notification tip.
                  Defaults to "warn"`,
    name: 'color',
    type: '"primary" | "accent" | "warn"',
  }, {
    description: `Sets the X position of the notification tip.
                  Defaults to "after" if it has content, else "center"`,
    name: 'positionX',
    type: 'TdNotificationCountPositionX or "before" | "after" | "center"',
  }, {
    description: `Sets the Y position of the notification tip.
                  Defaults to "top" if it has content, else "center"`,
    name: 'positionY',
    type: 'TdNotificationCountPositionY or "top" | "bottom" | "center"',
  }];


  constructor() { }

  ngOnInit() {
  }

}
