import { Component, ViewChild } from '@angular/core';
import { MenuModel } from 'src/app/Models/MenuModel';
import { CommonService } from 'src/app/Modules/SharedModule/Services/common.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  MenuOpened: boolean = false;
  MenuData: Array<MenuModel> = [];

  @ViewChild("MobileMenuDiv") MobileMenuDiv!: any;
  @ViewChild("HamburgerContainer") HamburgerContainer!: any;

  ngOnInit() {
    this.SetupMenuData();
    this.SetupOutsideClick();
  }

  constructor(private _CommonService: CommonService) { }

  ToggleMenu() {
    this.MenuOpened = !this.MenuOpened;
  }

  SetupMenuData() {
    this.MenuData = this._CommonService.GetMenuData();
  }

  SetupOutsideClick() {
    document.body.addEventListener('click', (event) => {
      if (this.MobileMenuDiv.nativeElement.contains(event.target) || this.HamburgerContainer.nativeElement.contains(event.target)) {

      } else {
        this.MenuOpened = false;
      }
    });
  }
}
