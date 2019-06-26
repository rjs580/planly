import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {FAQComponent} from "./faq.component";

const routes: Routes = [{
  path: "",
  component: FAQComponent,
  data: {
    title: "FAQ"
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FAQRoutingModule { }
