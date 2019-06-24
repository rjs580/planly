import { Component, OnInit } from "@angular/core";
import {NAVBAR_ITEMS} from "../navbar.items";

@Component({
  selector: "public-navbar",
  templateUrl: "./public-navbar.component.html",
  styleUrls: ["./public-navbar.component.scss"]
})
export class PublicNavbarComponent implements OnInit {
  public navbarItems = NAVBAR_ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
