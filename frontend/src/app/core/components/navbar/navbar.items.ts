import {NavbarSeparator} from "../../../shared/models/navbar-separator";
import {NavbarLink} from "../../../shared/models/navbar-link";
import {NavbarButton} from "../../../shared/models/navbar-button";

export const NAVBAR_ITEMS = [
  new NavbarLink("About", "/"),
  new NavbarLink("How it works", "/"),
  new NavbarLink("Pricing", "/"),
  new NavbarLink("FAQ", "/"),
  new NavbarButton("Log in", ""),
  new NavbarSeparator(),
  new NavbarButton("Get Planly", "")
];
