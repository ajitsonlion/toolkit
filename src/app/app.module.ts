import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Http, HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {CovalentCoreModule} from '@covalent/core';
import {CovalentHttpModule} from '@covalent/http';
import {CovalentHighlightModule} from '@covalent/highlight';
import {CovalentMarkdownModule} from '@covalent/markdown';
import {CovalentChartsModule} from '@covalent/charts';
import {CovalentDynamicFormsModule} from '@covalent/dynamic-forms';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { getSelectedLanguage, createTranslateLoader } from './utilities/translate';
import {  MaterialComponentsComponent} from './material-components/material-components.component';
import {RouterModule} from '@angular/router';
import {CovalentComponentsComponent} from './covalent-components/covalent-components.component';
import { CovalentStepperComponent } from './covalent-components/covalent-stepper/covalent-stepper.component';
import { CovalentSearchComponent } from './covalent-components/covalent-search/covalent-search.component';
import { CovalentNotificationsComponent } from './covalent-components/covalent-notifications/covalent-notifications.component';
import { CovalentPagingComponent } from './covalent-components/covalent-paging/covalent-paging.component';
import { CovalentLoadingComponent } from './covalent-components/covalent-loading/covalent-loading.component';
import { CovalentFileUploadComponent } from './covalent-components/covalent-file-upload/covalent-file-upload.component';
import { CovalentExpansionComponent } from './covalent-components/covalent-expansion/covalent-expansion.component';
import { CovalentChipsComponent } from './covalent-components/covalent-chips/covalent-chips.component';
import { CovalentDialogsComponent } from './covalent-components/covalent-dialogs/covalent-dialogs.component';
import {MaterialDemoModulesModule} from './material-components/material-demo-modules.module';
import {FullscreenOverlayContainer, MaterialModule, MdSelectionModule, OverlayContainer} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
     CovalentComponentsComponent,
    CovalentStepperComponent,
    CovalentSearchComponent,
    CovalentNotificationsComponent,
    CovalentPagingComponent,
    CovalentLoadingComponent,
    CovalentFileUploadComponent,
    CovalentExpansionComponent,
    CovalentChipsComponent,
    CovalentDialogsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    JsonpModule,
    MaterialModule,
    MdSelectionModule,
    MaterialDemoModulesModule,
    RouterModule.forRoot([]),
    CovalentCoreModule.forRoot(),
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
    CovalentChartsModule.forRoot(),
    CovalentDynamicFormsModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [Http],
      },
    }),
  ],
  providers: [
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
