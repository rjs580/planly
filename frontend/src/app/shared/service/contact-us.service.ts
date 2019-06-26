import { Injectable } from "@angular/core";
import {GetPlanlyService} from "./get-planly.service";

@Injectable({
  providedIn: "root"
})
export class ContactUsService {

  constructor(private getplanlyService: GetPlanlyService) { }

  buttonClicked() {
    this.getplanlyService.buttonClicked();
  }
}
