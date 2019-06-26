import { Injectable } from "@angular/core";
import {SweetAlert} from "../../../shared/service/sweetalert.service";
import * as $ from "jquery";

@Injectable()
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    return false;
  }

  login() {
    SweetAlert.swal().fire({
      html: "<h1 class='font-weight-bold'>Log in</h1>" + this.loginForm(),
      showConfirmButton: false,
      showCloseButton: false,
      showCancelButton: false,
      allowOutsideClick: true
    });

    $("#loginForm").submit((event) => {
      event.preventDefault();
      this.tryLogin();
    });
  }

  loginForm() {
    return "<form class='text-left' id='loginForm' #loginForm>" +
      "<div class='my-4'>" +
      "<div class='form-group'>" +
      "<label for='email_log' class='planly-label'>Email</label>" +
      "<input id='email_log' type='email' class='form-control planly-control' placeholder='stanley@getplanly.com' required>" +
      "</div>" +
      "<div class='form-group'>" +
      "<label for='password_log' class='planly-label'>Password</label>" +
      "<input id='password_log' type='password' autocomplete='on' class='form-control planly-control' placeholder='********' required>" +
      "</div>" +
      "</div>" +
      "<button type='submit' class='btn-form'>Log in</button>";
  }

  tryLogin() {
    SweetAlert.toast().fire({
      type: "error",
      title: "Incorrect email or password"
    });
  }
}
