import {Injectable} from "@angular/core";
import Swal from "sweetalert2/dist/sweetalert2.js";

@Injectable()
export class SweetAlert {
  private static Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000
  });

  constructor() {
  }

  static error(title: string, text: string) {
    Swal.fire({
      type: "error",
      title: title,
      text: text
    });
  }

  static swal() {
    return Swal;
  }

  static toast() {
    return this.Toast;
  }
}
