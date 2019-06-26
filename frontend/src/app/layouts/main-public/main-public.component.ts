import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: "app-main-public",
  templateUrl: "./main-public.component.html",
  styleUrls: ["./main-public.component.scss"]
})
export class MainPublicComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
