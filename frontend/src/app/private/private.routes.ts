import {Routes} from "@angular/router";

export const PRIVATE_ROUTES: Routes = [
  {path: "private-home", loadChildren: "./private/private-home/private-home.module#PrivateHomeModule", data: {preload: false, delay: false}}
];
