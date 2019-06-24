import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {SweetAlert} from "./service/sweetalert.service";

@NgModule({
  declarations: [],
  exports: [
    TranslateModule
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  providers: [
    SweetAlert
  ]
})
export class SharedModule {
}
