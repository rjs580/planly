import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CoreRoutingModule} from "./core-routing.module";
import {AuthGuard} from "./services/auth/auth-guard.service";
import {SharedModule} from "../shared/shared.module";
import { PublicNavbarComponent } from "./components/navbar/public-navbar/public-navbar.component";
import { PrivateNavbarComponent } from "./components/navbar/private-navbar/private-navbar.component";
import {AuthService} from "./services/auth/auth.service";

@NgModule({
  declarations: [PublicNavbarComponent, PrivateNavbarComponent],
  exports: [
    PrivateNavbarComponent,
    PublicNavbarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  providers: [AuthGuard, AuthService]
})
export class CoreModule {
}
