import {Component} from '@angular/core';
import {TrackUserTimeDirective} from "./track-user-time.directive";
import {Time} from "@angular/common";

@Component({
  selector: 'app-dop3',
  standalone: true,
  imports: [
    TrackUserTimeDirective
  ],
  templateUrl: './dop3.component.html',
  styleUrl: './dop3.component.scss'
})
export class Dop3Component {
  mainTime: string = '';
  lastSavedValue: string = '';

  saveInterval: number = 15;//Интервал для сохранения

  refreshTime(val: number): void {
    this.mainTime=new Date(val * 1000).toISOString().substring(11, 19);
  }

  refreshLastSavedValue(val: number): void {
    this.lastSavedValue = new Date(val * 1000).toISOString().substring(11, 19);
  }

}
