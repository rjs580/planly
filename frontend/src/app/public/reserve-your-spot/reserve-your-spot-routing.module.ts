import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {ReserveYourSpotComponent} from "./reserve-your-spot.component";

const routes: Routes = [{
  path: "",
  component: ReserveYourSpotComponent,
  data: {
    title: "Reserve your spot"
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReserveYourSpotRoutingModule { }
