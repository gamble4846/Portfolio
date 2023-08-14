import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuModel } from 'src/app/Models/MenuModel';
import { CommonService } from 'src/app/Modules/SharedModule/Services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  MenuOpened: boolean = false;
  MenuData: Array<MenuModel> = [];

  @ViewChild("MobileMenuDiv") MobileMenuDiv!: any;
  @ViewChild("HamburgerContainer") HamburgerContainer!: any;

  ngOnInit() {
    this.SetupMenuData();
    this.SetupOutsideClick();
  }

  constructor(private _CommonService:CommonService) { }

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
