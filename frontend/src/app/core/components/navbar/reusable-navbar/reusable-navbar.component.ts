import {Component, HostListener, OnInit} from "@angular/core";

@Component({
  selector: "reusable-navbar",
  templateUrl: "./reusable-navbar.component.html",
  styleUrls: ["./reusable-navbar.component.scss"]
})
export class ReusableNavbarComponent implements OnInit {

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

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    console.log("scrolling");

    if (window.pageYOffset > 2) {
      const el = document.getElementById("navbar");
      el.classList.add("shadow");
    } else {
      const el = document.getElementById("navbar");
      el.classList.remove("shadow");
    }

    // if (window.pageYOffset > 550) {
    //   let element = document.getElementById("navbar");
    //   element.classList.add("sticky");
    // } else {
    //   let element = document.getElementById("navbar");
    //   element.classList.remove("sticky");
    // }
  }
}
