import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit{
  @Input() BackgroundColor: string = "var(--primary-orange)";
  @Input() BackgroundImageURL: string | undefined;
  @Input() ProjectPrimaryImageURL: string | undefined;
  @Input() ProjectTitle: string = "";
  @Input() ProjectDescription: string = "";
  @Input() FontColor: string = "white";
  @Input() DarkenImageCSS:string = "";

  StylesToApply:any = {};

  ngOnInit() {
    this.StylesToApply.color = this.FontColor;
    this.GetBackground();
  }

  GetBackground() {
    if (this.BackgroundImageURL) {
      this.StylesToApply.backgroundImage = `${this.DarkenImageCSS}url('${this.BackgroundImageURL}')`;
    }
    else {
      this.StylesToApply.backgroundColor = this.BackgroundColor;
    }
  }
}
