import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { FooterComponent } from './Components/FooterComponent/footer.component';
import { HeaderComponent } from './Components/HeaderComponent/header.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class NavigationModule { }
