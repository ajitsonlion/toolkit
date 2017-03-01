import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-covalent-components',
  styleUrls: ['./covalent-components.component.scss'],
  templateUrl: './covalent-components.component.html'
})
export class CovalentComponentsComponent implements AfterViewInit{
  public ngAfterViewInit(): void {
    console.log('IAmReady');
  }


}

