import { Component } from '@angular/core';
import {NgFor} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AutoSelectSingleOptionDirective} from "./auto-select-single-option.directive";

@Component({
  selector: 'app-dop5',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    AutoSelectSingleOptionDirective
  ],
  templateUrl: './dop5.component.html',
  styleUrl: './dop5.component.scss'
})
export class Dop5Component {
  optionsDigits:Array<string>=['First','Second','Third','Four'];
  optionsNames:Array<string>=['Volodymyr'];
  selectedDigit:string='';
  selectedName: string='';
}
