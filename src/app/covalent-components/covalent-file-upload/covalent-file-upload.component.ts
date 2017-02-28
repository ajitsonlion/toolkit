import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covalent-file-upload',
  templateUrl: './covalent-file-upload.component.html',
  styleUrls: ['./covalent-file-upload.component.scss']
})
export class CovalentFileUploadComponent implements OnInit {
  fileSelectMsg: string = 'No file selected yet.';
  fileUploadMsg: string = 'No file uploaded yet.';
  fileSelectMultipleMsg: string = 'No file(s) selected yet.';
  fileUploadMultipleMsg: string = 'No file(s) uploaded yet.';
  disabled: boolean = false;

  selectEvent(file: File): void {
    this.fileSelectMsg = file.name;
  };

  uploadEvent(file: File): void {
    this.fileUploadMsg = file.name;
  };

  selectMultipleEvent(files: FileList | File): void {
    if (files instanceof FileList) {
      let names: string[] = [];
      for (let i: number = 0; i < files.length; i++) {
        names.push(files[i].name);
      }
      this.fileSelectMultipleMsg = names.join(',');
    } else {
      this.fileSelectMultipleMsg = files.name;
    }
  }

  uploadMultipleEvent(files: FileList | File): void {
    if (files instanceof FileList) {
      let names: string[] = [];
      for (let i: number = 0; i < files.length; i++) {
        names.push(files[i].name);
      }
      this.fileUploadMultipleMsg = names.join(',');
    } else {
      this.fileUploadMultipleMsg = files.name;
    }
  }

  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }
  constructor() { }

  ngOnInit() {
  }

}
