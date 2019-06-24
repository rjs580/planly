import {NavbarItem} from "./navbar-item";
import {NavbarItems} from "./navbar-items.enum";

export class NavbarLink implements NavbarItem {
  content: string;
  type: NavbarItems;
  link: string;

  constructor(content: string, link: string) {
    this.content = content;
    this.link = link;
    this.type = NavbarItems.LINK;
  }
}
