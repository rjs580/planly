import {Directive, ElementRef, EventEmitter, HostListener, Output} from "@angular/core";

@Directive({
  selector: "[clickOutside]"
})
export class ClickOutsideDirective {
  constructor(private elementRef: ElementRef) {
  }

  @Output()
  public clickOutside = new EventEmitter<Event>();

  @HostListener("document:touchend", ["$event", "$event.target"])
  @HostListener("document:click", ["$event", "$event.target"])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement || targetElement.classList.contains("hamburger-box") ||
      targetElement.classList.contains("hamburger-inner") || targetElement.classList.contains("hamburger")) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
}
