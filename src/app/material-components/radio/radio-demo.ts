import {Component} from '@angular/core';


@Component({
   selector: 'radio-demo',
  templateUrl: './radio-demo.html',
  styleUrls: ['./radio-demo.scss'],
})
export class RadioDemo {
  isDisabled: boolean = false;
  isAlignEnd: boolean = false;
  favoriteSeason: string = 'Autumn';
  seasonOptions = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
}
