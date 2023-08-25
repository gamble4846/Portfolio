import { Component } from '@angular/core';
import { DisplayCabinateItemsModel } from 'src/app/Models/DisplayCabinateItemsModel';

@Component({
  selector: 'app-opener',
  templateUrl: './opener.component.html',
  styleUrls: ['./opener.component.css']
})
export class OpenerComponent {

  SkillsItems: Array<DisplayCabinateItemsModel> = [];

  ngOnInit(): void {
    this.SetupSkillItems();
  }

  SetupSkillItems() {
    this.SkillsItems.push({ Name: "C#", ImageLink: "https://i.imgur.com/a3qxxNh.png" });
    this.SkillsItems.push({ Name: "SQL", ImageLink: "https://i.imgur.com/jYGDbNk.png" });
    this.SkillsItems.push({ Name: ".Net", ImageLink: "https://i.imgur.com/vulH6GW.png" });
    this.SkillsItems.push({ Name: "Angular", ImageLink: "https://i.imgur.com/szneKCD.png" });
  }
}
