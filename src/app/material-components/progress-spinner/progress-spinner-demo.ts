import {Component} from '@angular/core';


@Component({
   selector: 'progress-spinner-demo',
  templateUrl: './progress-spinner-demo.html',
  styleUrls: ['./progress-spinner-demo.scss'],
})
export class ProgressSpinnerDemo {
  progressValue: number = 40;
  color: string = 'primary';

  step(val: number) {
    this.progressValue = Math.max(0, Math.min(100, val + this.progressValue));
  }

}
