import {NavbarSeparator} from "../../../shared/models/navbar-separator";
import {NavbarLink} from "../../../shared/models/navbar-link";
import {NavbarButton} from "../../../shared/models/navbar-button";

export const PUBLIC_NAVBAR_ITEMS = [
  new NavbarLink("About", "/about"),
  new NavbarLink("How it works", "/how-it-works"),
  new NavbarLink("Pricing", "/pricing"),
  new NavbarLink("FAQ", "/faq"),
  new NavbarButton("LOG IN", "loginButton"),
  new NavbarSeparator(),
  new NavbarButton("GET PLANLY", "getPlanlyButton")
];
