import {NavbarLink} from "./navbar-link";
import {NavbarItems} from "./navbar-items.enum";

export class NavbarButton extends NavbarLink {
  constructor(content: string, link: string) {
    super(content, link);
    this.type = NavbarItems.BUTTON;
  }
}
