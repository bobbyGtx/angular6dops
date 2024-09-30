import { Component } from '@angular/core';
import {AutoExpandTextareaDirective} from "./auto-expand-textarea.directive";

@Component({
  selector: 'app-dop2',
  standalone: true,
  imports: [
    AutoExpandTextareaDirective
  ],
  templateUrl: './dop2.component.html',
  styleUrl: './dop2.component.scss'
})
export class Dop2Component {

}
