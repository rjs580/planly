import {Injectable} from "@angular/core";
import {SweetAlert} from "./sweetalert.service";
import * as $ from "jquery";
import {Router} from "@angular/router";

declare const Calendly;

@Injectable()
export class GetPlanlyService {
  constructor(private router: Router) {
  }

  buttonClicked() {
    SweetAlert.swal().fire({
      html: this.contactUsHTML(),
      showConfirmButton: false,
      showCloseButton: false,
      showCancelButton: false,
      allowOutsideClick: true
    });

    $("#chatWithAdvisor_GetPlanly").click(() => {
      this.chatWithAdvisor();
    });

    $("#reserveSpot_GetPlanly").click(() => {
      SweetAlert.swal().close();
      this.reserveSpot();
    });
  }

  contactUsHTML() {
    return "<img src='assets/img/about/top_image.svg' class='img-fluid' style='max-height: 120px;' alt=''>" +
      "<p class='mt-4 mb-1'>See if Planly is right for you.</p>" +
      "<button id='chatWithAdvisor_GetPlanly' class='btn-planly btn-block'>Chat with an advisor</button>" +
      "<p class='mt-3 mb-1'>Ready to get started?</p>" +
      "<button id='reserveSpot_GetPlanly' class='btn-planly-alt btn-block'>Reserve your spot</button>";
  }

  chatWithAdvisorHTML() {
    return "<img src='assets/img/about/top_image.svg' class='img-fluid' style='max-height: 120px;' alt=''>" +
      "<button class='mt-4 btn-planly btn-block' id='scheduleCall'>Schedule a call</button>" +
      "<a class='mt-3 btn-planly btn-block' href='mailto:justin@getplanly.com'>Email us</a>";
  }

  chatWithAdvisor() {
    SweetAlert.swal().fire({
      html: this.chatWithAdvisorHTML(),
      showConfirmButton: false,
      showCloseButton: false,
      showCancelButton: false,
      allowOutsideClick: true
    });

    $("#scheduleCall").click(() => {
      SweetAlert.swal().close();
      Calendly.initPopupWidget({url: "https://calendly.com/getplanly/chat-with-a-planly-advisor"});
    });
  }

  reserveSpot() {
    this.router.navigate(["/reserve-your-spot"]);
  }
}
