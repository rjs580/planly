import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {Page404Component} from "./page404.component";

const routes: Routes = [{
  path: "",
  component: Page404Component,
  data: {
    title: "Page not found"
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page404RoutingModule { }
