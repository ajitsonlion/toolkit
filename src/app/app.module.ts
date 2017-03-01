import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {CovalentCoreModule} from '@covalent/core';
 import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {FullscreenOverlayContainer, MdSelectionModule, OverlayContainer} from '@angular/material';


export const DEMO_APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: './material-components/material-demo-modules.module#MaterialDemoModulesModule'
  },
  {
    path: 'covalent',
    loadChildren: './covalent-components/covalent-demo.module#CovalentDemoModule'
  },
  {
    path: 'charts',
    loadChildren: './highcharts-components/high-charts.module#HighChartsModule'
  },

];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MdSelectionModule,
    RouterModule.forRoot(DEMO_APP_ROUTES,
      {
        useHash: true,
        preloadingStrategy: PreloadAllModules
      }),
    CovalentCoreModule.forRoot()
  ],
  providers: [
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
