import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: "input-slider",
  templateUrl: "./input-slider.component.html",
  styleUrls: ["./input-slider.component.scss"]
})
export class InputSliderComponent implements OnInit {
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() value: number;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  private trackForeground: any;
  private trackBackground: any;

  constructor() {
  }

  ngOnInit() {
    this.trackForeground = window.getComputedStyle(document.body).getPropertyValue("--a-secondary");
    this.trackBackground = window.getComputedStyle(document.body).getPropertyValue("--off-gray");
  }

  inputInit(input: HTMLInputElement): void {
    input.value = String(this.value);
    this.updateInputElement(input);
  }

  updateInputElement(input: HTMLInputElement): void {
    const inputVal = +input.value;
    const inputMin = +input.min;
    const inputMax = +input.max;

    const val = (inputVal - inputMin) / (inputMax - inputMin);
    input.style.backgroundImage = [
      "-webkit-gradient(",
      "linear, ",
      "left top, ",
      "right top, ",
      "color-stop(" + val + ", " + this.trackForeground.trim() + "), ",
      "color-stop(" + val + ", " + this.trackBackground.trim() + ")",
      ")"
    ].join("");

    this.valueChange.emit(inputVal);
  }
}
