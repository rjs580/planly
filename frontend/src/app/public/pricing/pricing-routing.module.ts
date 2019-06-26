import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {PricingComponent} from "./pricing.component";

const routes: Routes = [{
  path: "",
  component: PricingComponent,
  data: {
    title: "Pricing"
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRoutingModule { }
