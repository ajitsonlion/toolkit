import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covalent-search',
  templateUrl: './covalent-search.component.html',
  styleUrls: ['./covalent-search.component.scss']
})
export class CovalentSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchInputAttrs: Object[] = [{
    description: `Debounce timeout between keypresses. Defaults to 400.`,
    name: 'debounce?',
    type: 'number',
  }, {
    description: `Placeholder for the underlying input component.`,
    name: 'placeholder?',
    type: 'string',
  }, {
    description: `Sets if the input underline should be visible. Defaults to 'false'.`,
    name: 'showUnderline?',
    type: 'boolean',
  }, {
    description: `Event emitted after the [debounce] timeout.`,
    name: 'searchDebounce',
    type: 'function($event)',
  }, {
    description: `Event emitted after the key enter has been pressed.`,
    name: 'search',
    type: 'function($event)',
  }, {
    description: `Event emitted after the clear icon has been clicked.`,
    name: 'clear',
    type: 'function($event)',
  }];

  searchBoxAttrs: Object[] = [{
    description: `Debounce timeout between keypresses. Defaults to 400.`,
    name: 'debounce?',
    type: 'number',
  }, {
    description: `Placeholder for the underlying input component.`,
    name: 'placeholder?',
    type: 'string',
  }, {
    description: `The icon used to close the search toggle, only shown when [alwaysVisible] is false.
                  Defaults to 'search' icon.`,
    name: 'backIcon?',
    type: 'string',
  }, {
    description: `Sets if the input underline should be visible. Defaults to 'false'.`,
    name: 'showUnderline?',
    type: 'boolean',
  }, {
    description: `Sets if the input should always be visible. Defaults to 'false'.`,
    name: 'alwaysVisible?',
    type: 'boolean',
  }, {
    description: `Event emitted after the [debounce] timeout.`,
    name: 'searchDebounce',
    type: 'function($event)',
  }, {
    description: `Event emitted after the key enter has been pressed.`,
    name: 'search',
    type: 'function($event)',
  }, {
    description: `Event emitted after the clear icon has been clicked.`,
    name: 'clear',
    type: 'function($event)',
  }];

  searchInputTerm: string = '';
  searchBoxTerm: string = '';
  debounce: number = 0;
  alwaysVisible: boolean = false;

  modeChange(): void {
    this.searchInputTerm = '';
    this.searchBoxTerm = '';
  }

  toggleAlwaysVisible(): void {
    this.alwaysVisible = !this.alwaysVisible;
  }
}
