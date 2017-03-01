import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LoadingMode, LoadingType, TdLoadingService} from '@covalent/core';

@Component({
  selector: 'app-covalent-loading',
  templateUrl: './covalent-loading.component.html',
  styleUrls: ['./covalent-loading.component.scss']
})
export class CovalentLoadingComponent implements AfterViewInit, OnInit {

  overlayStarSyntax = false;

  constructor(private _loadingService: TdLoadingService) {
    this._loadingService.create({
      name: 'configFullscreenDemo',
      type: LoadingType.Linear,
      mode: LoadingMode.Indeterminate,
      color: 'accent',
    });
  }

  ngOnInit(): void {
    this.toggleDefaultFullscreenDemo();
  }

  ngAfterViewInit(): void {
    this.startDirectives();
  }

  toggleDefaultFullscreenDemo(): void {
    this._loadingService.register();
    window.setTimeout(() => {
      this._loadingService.resolve();
    }, 1500);
  }

  toggleConfigFullscreenDemo(): void {
    this._loadingService.register('configFullscreenDemo');
    window.setTimeout(() => {
      this._loadingService.resolve('configFullscreenDemo');
    }, 1500);
  }

  toggleOverlayStarSyntax(): void {
    if (this.overlayStarSyntax) {
      this._loadingService.register('overlayStarSyntax');
    } else {
      this._loadingService.resolve('overlayStarSyntax');
    }
    this.overlayStarSyntax = !this.overlayStarSyntax;
  }

  toggleReplaceTemplateSyntax(): void {
    this._loadingService.register('replaceTemplateSyntax');
    let value: number = 0;
    const interval: any = setInterval(() => {
      this._loadingService.setValue('replaceTemplateSyntax', value);
      value = value + 10;
      if (value > 100) {
        clearInterval(interval);
      }
    }, 250);
    window.setTimeout(() => {
      this._loadingService.resolve('replaceTemplateSyntax');
    }, 3000);
  }

  startDirectives(): void {
    this._loadingService.register('overlayStarSyntax');
  }

}
