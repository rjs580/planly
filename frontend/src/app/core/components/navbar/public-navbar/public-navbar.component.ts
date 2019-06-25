import { Component, OnInit } from "@angular/core";
import {NAVBAR_ITEMS} from "../navbar.items";
import {NavbarItems} from "../../../../shared/models/navbar-items.enum";

@Component({
  selector: "public-navbar",
  templateUrl: "./public-navbar.component.html",
  styleUrls: ["./public-navbar.component.scss"]
})
export class PublicNavbarComponent implements OnInit {
  public navbarItems = NAVBAR_ITEMS;
  public NavbarItems = NavbarItems;

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar(hamburger: HTMLButtonElement, sidebar: HTMLDivElement, overlay: HTMLDivElement, event: Event) {
    if (hamburger.classList.contains("is-active")) {
      hamburger.classList.remove("is-active");
      sidebar.classList.remove("px-3");
      sidebar.style.width = "0";
      overlay.style.opacity = "0";
      overlay.style.visibility = "hidden";
    } else {
      hamburger.classList.add("is-active");
      sidebar.classList.add("px-3");
      sidebar.style.width = "250px";
      overlay.style.visibility = "visible";
      overlay.style.opacity = "1";
    }

    event.stopPropagation();
  }
}
