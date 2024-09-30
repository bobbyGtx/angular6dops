import { Component } from '@angular/core';
import {LongPressResetDirective} from "../dop8/long-press-reset.directive";
import {LongPressResetRDirective} from "./long-press-reset-r.directive";

@Component({
  selector: 'app-dop8r',
  standalone: true,
  imports: [
    LongPressResetDirective,
    LongPressResetRDirective
  ],
  templateUrl: './dop8r.component.html',
  styleUrl: './dop8r.component.scss'
})
export class Dop8rComponent {
  reset() {
    console.log('Reset...');
  }
}
