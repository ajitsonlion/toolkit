import { Component, OnInit } from '@angular/core';
import {TdDialogService} from '@covalent/core';

@Component({
  selector: 'app-covalent-dialogs',
  templateUrl: './covalent-dialogs.component.html',
  styleUrls: ['./covalent-dialogs.component.scss']
})
export class CovalentDialogsComponent implements OnInit {
  dialogServiceMethods: Object[] = [{
    description: `Opens an alert dialog with the provided config.`,
    name: 'openAlert',
    type: 'function(IAlertConfig): MdDialogRef<TdAlertDialogComponent>',
  }, {
    description: `Opens a confirm dialog with the provided config.`,
    name: 'openConfirm',
    type: 'function(IConfirmConfig): MdDialogRef<TdConfirmDialogComponent>',
  }, {
    description: `Opens a prompt dialog with the provided config.`,
    name: 'openPrompt',
    type: 'function(IPromptConfig): MdDialogRef<TdPromptDialogComponent>',
  }, {
    description: `Wrapper function over the open() method in MdDialog.
                  Opens a modal dialog containing the given component.`,
    name: 'open',
    type: 'function<T>(component: ComponentType<T>, config: MdDialogConfig): MdDialogRef<T>',
  }, {
    description: `Wrapper function over the closeAll() method in MdDialog.
                  Closes all of the currently-open dialogs.`,
    name: 'closeAll',
    type: 'function()',
  }];

  constructor(private _dialogService: TdDialogService) {}

  openAlert(): void {
    this._dialogService.openAlert({
      title: 'Alert',
      disableClose: true,
      message: 'This is how simple it is to create an alert with this wrapper service.',
    });
  }

  openConfirm(): void {
    this._dialogService.openConfirm({
      title: 'Confirm',
      message: 'This is how simple it is to create a confirm with this wrapper service. Do you agree?',
      cancelButton: 'Disagree',
      acceptButton: 'Agree',
    });
  }

  openPrompt(): void {
    this._dialogService.openPrompt({
      title: 'Prompt',
      message: 'This is how simple it is to create a prompt with this wrapper service. Prompt something.',
      value: 'Populated value',
      cancelButton: 'Cancel',
      acceptButton: 'Ok',
    });
  }

  ngOnInit() {
  }

}
