import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TimeColorDirective} from "./time-color.directive";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-dop1',
  standalone: true,
  imports: [
    FormsModule,
    TimeColorDirective,
    NgForOf
  ],
  templateUrl: './dop1.component.html',
  styleUrl: './dop1.component.scss'
})
export class Dop1Component {
  time: string = '';
  colors: string[] = [
    '',
    'white',
    'red',
    'chartreuse',
    'green',
    'darkgreen',
    'cornflowerblue',
    'blue',
    'darkblue',
    'orange',
    'yellow',
    'gray',
    'magenta',
    'aquamarine',
    'chartreuse',
    'cyan',
  ];
  morningColor:string='';
  dayColor:string='';
  eveningColor:string='';
  nightColor:string='';

  resetTime(): void {
    this.time = '';
  }
}
