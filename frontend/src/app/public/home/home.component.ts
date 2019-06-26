import {Component, OnDestroy, OnInit} from "@angular/core";
import {HomeImage} from "../../shared/models/home-image";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  private homeImgPath = "assets/img/home/";
  private homeImgNames = [
    "img1.svg",
    "img2.svg",
    "img3.svg",
    "img4.svg",
    "img5.svg"
  ];

  public homeImgs = [
    new HomeImage(this.homeImgPath + this.homeImgNames[0], "1"),
    new HomeImage(this.homeImgPath + this.homeImgNames[1], "0"),
    new HomeImage(this.homeImgPath + this.homeImgNames[2], "0"),
    new HomeImage(this.homeImgPath + this.homeImgNames[3], "0"),
    new HomeImage(this.homeImgPath + this.homeImgNames[4], "0")
  ];

  private intervalId = setInterval(() => this.changeHeaderImage(), 2000);
  private homeImgIndex = 0;

  constructor() {
  }

  ngOnInit() {
  }

  changeHeaderImage() {
    this.homeImgs[this.homeImgIndex].opacity = "0";
    this.homeImgIndex++;
    if (this.homeImgIndex >= this.homeImgs.length) {
      this.homeImgIndex = 0;
    }
    this.homeImgs[this.homeImgIndex].opacity = "1";
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
