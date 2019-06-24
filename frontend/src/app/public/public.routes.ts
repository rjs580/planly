import {Routes} from "@angular/router";

export const PUBLIC_ROUTES: Routes = [
  {path: "page-not-found", loadChildren: "./public/page404/page404.module#Page404Module", data: {preload: true, delay: true}},
  {path: "home", loadChildren: "./public/home/home.module#HomeModule", data: {preload: true, delay: true}},
  {path: "about", loadChildren: "./public/about/about.module#AboutModule", data: {preload: true, delay: true}}
];
