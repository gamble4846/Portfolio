import { Injectable } from '@angular/core';
import { MenuModel } from 'src/app/Models/MenuModel';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  GetMenuData() {
    let MenuData: Array<MenuModel> = [];
    MenuData.push({
      Name: 'Home',
      Route: ''
    });

    MenuData.push({
      Name: 'Contact Me',
      Route: ''
    });

    MenuData.push({
      Name: 'Projects',
      Route: ''
    });

    MenuData.push({
      Name: 'Job Experience',
      Route: ''
    });

    MenuData.push({
      Name: 'Resume',
      Route: ''
    });
    return MenuData;
  }
}
