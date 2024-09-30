import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ToggleViewModeDirective} from "./toggle-view-mode.directive";

@Component({
  selector: 'app-dop4',
  standalone: true,
  imports: [
    NgForOf,
    ToggleViewModeDirective
  ],
  templateUrl: './dop4.component.html',
  styleUrl: './dop4.component.scss'
})
export class Dop4Component {
  users: Array<UserType> = [
    {name: 'Первый', avatar: 'first'},
    {name: 'Второй', avatar: 'first'},
    {name: 'Третий', avatar: 'first'},
    {name: 'Четвертый', avatar: 'first'},
    {name: 'Пятый', avatar: 'first'},
    {name: 'Шестой', avatar: 'first'},
    {name: 'Седьмой', avatar: 'first'},
    {name: 'Восьмой', avatar: 'first'},
    {name: 'Девятый', avatar: 'first'},
    {name: 'Десятый', avatar: 'first'},
  ];
  selectedStyle: ViewStyle = ViewStyle.gridStyle;


  changeView(event: Event) {
    let el: HTMLInputElement = event.target as HTMLInputElement;
    if (el.checked) {
      this.selectedStyle = ViewStyle.gridStyle;
    } else{
      this.selectedStyle = ViewStyle.listStyle;
    }
  }
}

export type UserType = {
  name: string,
  avatar: string,
}

export enum ViewStyle {
  listStyle = 'list',
  gridStyle = 'grid'
}
