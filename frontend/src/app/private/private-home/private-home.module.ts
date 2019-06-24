import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PrivateHomeRoutingModule } from "./private-home-routing.module";
import { PrivateHomeComponent } from "./private-home.component";

@NgModule({
  declarations: [PrivateHomeComponent],
  imports: [
    CommonModule,
    PrivateHomeRoutingModule
  ]
})
export class PrivateHomeModule { }
