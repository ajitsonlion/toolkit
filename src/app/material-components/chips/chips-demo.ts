import {Component, ElementRef} from '@angular/core';

export interface Person {
  name: string;
}

export interface DemoColor {
  name: string;
  color: string;
}

@Component({
   selector: 'chips-demo',
  templateUrl: './chips-demo.html',
  styleUrls: ['./chips-demo.scss']
})
export class ChipsDemo {
  visible: boolean = true;
  color: string = '';

  people: Person[] = [
    { name: 'Kara' },
    { name: 'Jeremy' },
    { name: 'Topher' },
    { name: 'Elad' },
    { name: 'Kristiyan' },
    { name: 'Paul' }
  ];

  availableColors: DemoColor[] = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

  alert(message: string): void {
    console.log(message);
  }

  add(input: ElementRef): void {
    if (input.nativeElement.value && input.nativeElement.value.trim() != '') {
      this.people.push({ name: input.nativeElement.value.trim() });
      input.nativeElement.value = '';
    }
  }

  toggleVisible(): void {
    this.visible = false;
  }
}
