import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {SweetAlert} from "./service/sweetalert.service";
import { ClickOutsideDirective } from "./directives/click-outside.directive";
import { InputSliderComponent } from "./components/input-slider/input-slider.component";
import { InitElementDirective } from "./directives/init-element.directive";
import { FiduciaryComponent } from "./components/fiduciary/fiduciary.component";
import { LaunchingComponent } from "./components/launching/launching.component";
import {RouterModule} from "@angular/router";
import {GetPlanlyService} from "./service/get-planly.service";
import { SanitizeHTML } from "./pipes/sanitize-html.pipe";
import {ContactUsService} from "./service/contact-us.service";

@NgModule({
  declarations: [ClickOutsideDirective, InputSliderComponent, InitElementDirective, FiduciaryComponent, LaunchingComponent, SanitizeHTML],
  exports: [
    TranslateModule,
    ClickOutsideDirective,
    InputSliderComponent,
    FiduciaryComponent,
    LaunchingComponent,
    SanitizeHTML
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  providers: [
    SweetAlert,
    GetPlanlyService,
    ContactUsService
  ]
})
export class SharedModule {
}
