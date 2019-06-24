import {NavbarItem} from "./navbar-item";
import {NavbarItems} from "./navbar-items.enum";

export class NavbarSeparator implements NavbarItem {
  content: string;
  type: NavbarItems;

  constructor() {
    this.content = "|";
    this.type = NavbarItems.SEPARATOR;
  }
}
