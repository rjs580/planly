import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AppPreloadingStrategy} from "./app-preloading-strategy";
import {PUBLIC_ROUTES} from "./public/public.routes";
import {PRIVATE_ROUTES} from "./private/private.routes";
import {AuthGuard} from "./core/services/auth/auth-guard.service";
import {MainPublicComponent} from "./layouts/main-public/main-public.component";
import {MainPrivateComponent} from "./layouts/main-private/main-private.component";

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "", component: MainPublicComponent, children: PUBLIC_ROUTES},
  {path: "", component: MainPrivateComponent, children: PRIVATE_ROUTES, canActivate: [AuthGuard]},
  {path: "**", redirectTo: "page-not-found", pathMatch: "full"}
];

@NgModule({
  providers: [AppPreloadingStrategy],
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: AppPreloadingStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
