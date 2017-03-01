import {ApplicationRef, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AutocompleteDemo} from './autocomplete/autocomplete-demo';
import {BaselineDemo} from './baseline/baseline-demo';
import {ButtonDemo} from './button/button-demo';
import {ButtonToggleDemo} from './button-toggle/button-toggle-demo';
import {GesturesDemo} from './gestures/gestures-demo';
import {IconDemo} from './icon/icon-demo';
import {ChipsDemo} from './chips/chips-demo';
import {CardDemo} from './card/card-demo';
import {CheckboxDemo, MdCheckboxDemoNestedChecklist} from './checkbox/checkbox-demo';
import {ContentElementDialog, DialogDemo, IFrameDialog, JazzDialog} from './dialog/dialog-demo';
import {GridListDemo} from './grid-list/grid-list-demo';
import {InputDemo} from './input/input-demo';
import {ListDemo} from './list/list-demo';
import {LiveAnnouncerDemo} from './live-announcer/live-announcer-demo';
import {MenuDemo} from './menu/menu-demo';
import {SnackBarDemo} from './snack-bar/snack-bar-demo';
import {OverlayDemo, RotiniPanel, SpagettiPanel} from './overlay/overlay-demo';
import {PortalDemo, ScienceJoke} from './portal/portal-demo';
import {ProgressBarDemo} from './progress-bar/progress-bar-demo';
import {ProgressSpinnerDemo} from './progress-spinner/progress-spinner-demo';
import {ProjectionDemo, ProjectionTestComponent} from './projection/projection-demo';
import {RadioDemo} from './radio/radio-demo';
import {RippleDemo} from './ripple/ripple-demo';
import {SelectDemo} from './select/select-demo';
import {SidenavDemo} from './sidenav/sidenav-demo';
import {SliderDemo} from './slider/slider-demo';
import {SlideToggleDemo} from './slide-toggle/slide-toggle-demo';
import {StyleDemo} from './style/style-demo';
import {FoggyTabContent, RainyTabContent, SunnyTabContent, TabsDemo} from './tabs/tabs-demo';
import {ToolbarDemo} from './toolbar/toolbar-demo';
import {TooltipDemo} from './tooltip/tooltip-demo';
import {PlatformDemo} from './platform/platform-demo';
import {MaterialComponentsComponent} from './material-components.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
 import { MdSelectionModule} from '@angular/material';
import {CovalentCoreModule} from '@covalent/core';
export const MATERIAL_ROUTES: Routes = [
  {
    path: '',
    component: MaterialComponentsComponent
  }

];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
     ReactiveFormsModule,
    RouterModule.forChild(MATERIAL_ROUTES),
    CovalentCoreModule,
     MdSelectionModule
  ],
  declarations: [
    MaterialComponentsComponent,
    AutocompleteDemo,
    BaselineDemo,
    ButtonDemo,
    ButtonToggleDemo,
    ChipsDemo,
    CardDemo,
    CheckboxDemo,
    DialogDemo,
    GesturesDemo,
    GridListDemo,
    IconDemo,
    InputDemo,
    JazzDialog,
    ContentElementDialog,
    IFrameDialog,
    ListDemo,
    LiveAnnouncerDemo,
    MdCheckboxDemoNestedChecklist,
    MenuDemo,
    SnackBarDemo,
    OverlayDemo,
    PortalDemo,
    ProgressBarDemo,
    ProgressSpinnerDemo,
    ProjectionDemo,
    ProjectionTestComponent,
    RadioDemo,
    RippleDemo,
    RotiniPanel,
    ScienceJoke,
    SelectDemo,
    SidenavDemo,
    SliderDemo,
    SlideToggleDemo,
    SpagettiPanel,
    StyleDemo,
    ToolbarDemo,
    TooltipDemo,
    TabsDemo,
    SunnyTabContent,
    RainyTabContent,
    FoggyTabContent,
    PlatformDemo
  ],
  entryComponents: [
    JazzDialog,
    ContentElementDialog,
    IFrameDialog,
    RotiniPanel,
    ScienceJoke,
    SpagettiPanel,
  ],
  exports: [MaterialComponentsComponent]
})
export    class MaterialDemoModulesModule {
  constructor() {

  }

}
