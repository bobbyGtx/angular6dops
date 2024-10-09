import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InteractiveColoringDirective} from "./interactive-coloring.directive";

@Component({
  selector: 'app-dop12',
  standalone: true,
  imports: [
    FormsModule,
    InteractiveColoringDirective
  ],
  templateUrl: './dop12.component.html',
  styleUrl: './dop12.component.scss'
})
export class Dop12Component {
  selectedColor: string = '#ff0000';
}
