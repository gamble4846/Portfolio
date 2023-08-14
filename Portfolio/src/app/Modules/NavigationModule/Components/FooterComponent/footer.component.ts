import { Component } from '@angular/core';
import { MenuModel } from 'src/app/Models/MenuModel';
import { CommonService } from 'src/app/Modules/SharedModule/Services/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  MenuData: Array<MenuModel> = [];

  constructor(private _CommonService:CommonService) { }
  
  ngOnInit() {
    this.SetupMenuData();
  }

  SetupMenuData() {
    this.MenuData = this._CommonService.GetMenuData();
  }
}

