import { Component } from '@angular/core';
import {NgForWithDelayDirective} from "./ng-for-with-delay.directive";

@Component({
  selector: 'app-dop14',
  standalone: true,
  imports: [
    NgForWithDelayDirective
  ],
  templateUrl: './dop14.component.html',
  styleUrl: './dop14.component.scss'
})
export class Dop14Component {
elementList:string[]=['Первый','Второй','Третий','Четвертый','Пятый','Шестой','Седьмой','Восьмой',];
}
