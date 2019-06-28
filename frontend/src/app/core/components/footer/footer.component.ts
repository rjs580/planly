import { Component, OnInit } from "@angular/core";
import {SocialLink} from "../../../shared/models/social-link";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  public socialLinks: SocialLink[];
  public date = new Date();

  constructor() {
    this.socialLinks = [{
      name: "Twitter",
      link: "https://twitter.com/getplanly"
    }, {
      name: "Facebook",
      link: "https://www.facebook.com/Planly-455643338576715"
    }, {
      name: "Instagram",
      link: "https://www.instagram.com/getplanly/"
    }, {
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCR3PTsJ-Zcazll5Ty78Omvw"
    }];
  }

  ngOnInit() {
  }

}
