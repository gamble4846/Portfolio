import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { FooterComponent } from './Components/FooterComponent/footer.component';
import { MenuComponent } from './Components/MenuComponent/menu.component';


@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule
  ],
  exports: [
    MenuComponent
  ]
})
export class NavigationModule { }
