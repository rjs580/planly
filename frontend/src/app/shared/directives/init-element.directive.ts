import {AfterViewInit, Directive, EventEmitter, Output} from "@angular/core";

@Directive({
  selector: "[initElement]"
})
export class InitElementDirective implements AfterViewInit {
  @Output("initElement") initEvent: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initEvent.emit();
    }, 0);
  }
}
