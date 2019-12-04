import {Routes} from "@angular/router";

export const PUBLIC_ROUTES: Routes = [
  {path: "page-not-found", loadChildren: "./public/page404/page404.module#Page404Module", data: {preload: true, delay: true}},
  {path: "sign-in", loadChildren: "./public/sign-in/sign-in.module#SignInModule", data: {preload: true, delay: true}},
];
