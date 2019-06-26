import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HowItWorksRoutingModule } from "./how-it-works-routing.module";
import { HowItWorksComponent } from "./how-it-works.component";
import {SharedModule} from "../../shared/shared.module";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";

@NgModule({
  declarations: [HowItWorksComponent],
  imports: [
    CommonModule,
    HowItWorksRoutingModule,
    SharedModule,
    PerfectScrollbarModule
  ]
})
export class HowItWorksModule { }
