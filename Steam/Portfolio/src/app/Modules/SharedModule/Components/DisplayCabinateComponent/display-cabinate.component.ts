import { Component, Input } from '@angular/core';
import { DisplayCabinateItemsModel } from 'src/app/Models/DisplayCabinateItemsModel';

@Component({
  selector: 'app-display-cabinate',
  templateUrl: './display-cabinate.component.html',
  styleUrls: ['./display-cabinate.component.css']
})
export class DisplayCabinateComponent {
  @Input() Title: String = "";
  @Input() Items: Array<DisplayCabinateItemsModel> = [];
  @Input() Total: number = 0;
}
