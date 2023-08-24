import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BackgroundComponent } from './Components/BackgroundComponent/background.component';


@NgModule({
  declarations: [
    BackgroundComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    BackgroundComponent
  ]
})
export class SharedModule { }
