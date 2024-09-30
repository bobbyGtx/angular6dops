import { Component } from '@angular/core';
import {InputConstraintDirective} from "../dop7/input-constraint.directive";
import {LongPressResetDirective} from "./long-press-reset.directive";

@Component({
  selector: 'app-dop8',
  standalone: true,
  imports: [
    LongPressResetDirective
  ],
  templateUrl: './dop8.component.html',
  styleUrl: './dop8.component.scss'
})
export class Dop8Component {

}
