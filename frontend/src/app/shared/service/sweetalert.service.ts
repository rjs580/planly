import {Injectable} from "@angular/core";
import Swal from "sweetalert2/dist/sweetalert2.js";

@Injectable()
export class SweetAlert {
  constructor() {
  }

  static error(title: string, text: string) {
    Swal.fire({
      type: "error",
      title: title,
      text: text
    });
  }
}
