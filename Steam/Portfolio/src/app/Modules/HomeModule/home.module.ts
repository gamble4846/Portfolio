import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { OpenerComponent } from './Components/OpenerComponent/opener.component';
import { ProfileHeaderComponent } from './Components/ProfileHeaderComponent/profile-header.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    OpenerComponent,
    ProfileHeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule
  ]
})
export class HomeModule { }
