import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: "app-launching",
  templateUrl: "./launching.component.html",
  styleUrls: ["./launching.component.scss"]
})
export class LaunchingComponent implements OnInit {
  constructor(public router: Router) { }

  ngOnInit() {
  }
}
