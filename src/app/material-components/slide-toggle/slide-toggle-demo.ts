import {Component} from '@angular/core';


@Component({
   selector: 'switch-demo',
  templateUrl: './slide-toggle-demo.html',
  styleUrls: ['./slide-toggle-demo.scss'],
})
export class SlideToggleDemo {
  firstToggle: boolean;

  onFormSubmit() {
    alert(`You submitted the form.`);
  }

}
