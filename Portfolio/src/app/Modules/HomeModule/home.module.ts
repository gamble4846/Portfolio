import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './Components/MainComponent/main.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { IntroductionComponent } from './Components/IntroductionComponent/introduction.component';
import { ContectMeFormComponent } from './Components/ContectMeFormComponent/contect-me-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    MainComponent,
    IntroductionComponent,
    ContectMeFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule
  ]
})
export class HomeModule { }
