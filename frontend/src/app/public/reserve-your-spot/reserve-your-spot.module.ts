import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReserveYourSpotRoutingModule } from "./reserve-your-spot-routing.module";
import { ReserveYourSpotComponent } from "./reserve-your-spot.component";
import {NgxStripeModule} from "ngx-stripe";

@NgModule({
  declarations: [ReserveYourSpotComponent],
  imports: [
    CommonModule,
    ReserveYourSpotRoutingModule,
    NgxStripeModule
  ]
})
export class ReserveYourSpotModule { }
