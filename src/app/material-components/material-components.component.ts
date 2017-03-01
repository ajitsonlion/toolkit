import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-material-components',
  styleUrls: ['./material-components.component.scss'],
  templateUrl: './material-components.component.html'
})
export class MaterialComponentsComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    console.log('IAmReady');
  }
}

