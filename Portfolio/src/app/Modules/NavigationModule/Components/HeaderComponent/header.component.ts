import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuModel } from 'src/app/Models/MenuModel';

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

  ToggleMenu() {
    this.MenuOpened = !this.MenuOpened;
  }

  SetupMenuData() {
    this.MenuData.push({
      Name: 'Home',
      Route: ''
    });

    this.MenuData.push({
      Name: 'Contact Me',
      Route: ''
    });

    this.MenuData.push({
      Name: 'Projects',
      Route: ''
    });

    this.MenuData.push({
      Name: 'Job Experience',
      Route: ''
    });

    this.MenuData.push({
      Name: 'Resume',
      Route: ''
    });
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
