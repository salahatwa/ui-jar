import { Component, Input } from '@angular/core';

/**
 * @group Button & indicators
 * @component Progress bar
 */
@Component({
  selector: 'x-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  @Input() type: ProgressBarType = "indefinite";
  private _value: string;
  @Input()
  set value(value: number) {
    this._value = value +'%';
  }
}

type ProgressBarType = "indefinite" | "definite";