import { Pipe, PipeTransform } from "@angular/core";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Pipe({
  name: "sanitizeHTML"
})
export class SanitizeHTML implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
