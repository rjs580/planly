import {AfterViewInit, Component, OnInit} from "@angular/core";
import {PUBLIC_NAVBAR_ITEMS} from "../navbar.items";
import {NavbarItems} from "../../../../shared/models/navbar-items.enum";

import * as $ from "jquery";
import {AuthService} from "../../../services/auth/auth.service";
import {GetPlanlyService} from "../../../../shared/service/get-planly.service";

@Component({
  selector: "public-navbar",
  templateUrl: "./public-navbar.component.html",
  styleUrls: ["./public-navbar.component.scss"]
})
export class PublicNavbarComponent implements OnInit, AfterViewInit {
  public navbarItems = PUBLIC_NAVBAR_ITEMS;
  public NavbarItems = NavbarItems;

  constructor(private auth: AuthService, private getplanly: GetPlanlyService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    $(".loginButton").click((event) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      this.logInClicked();
    });

    $(".getPlanlyButton").click((event) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      this.getPlanlyClicked();
    });
  }

  logInClicked() {
    this.auth.login();
  }

  getPlanlyClicked() {
    this.getplanly.buttonClicked();
  }
}
