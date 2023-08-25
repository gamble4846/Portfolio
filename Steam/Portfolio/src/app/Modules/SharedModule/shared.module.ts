import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BackgroundComponent } from './Components/BackgroundComponent/background.component';
import { DisplayCabinateComponent } from './Components/DisplayCabinateComponent/display-cabinate.component';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [
    BackgroundComponent,
    DisplayCabinateComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NzGridModule
  ],
  exports:[
    BackgroundComponent,
    DisplayCabinateComponent
  ]
})
export class SharedModule { }
