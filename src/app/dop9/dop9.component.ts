import {Component} from '@angular/core';
import {NgIf} from "@angular/common";
import {FocusTrapDirective} from "./focus-trap.directive";

@Component({
  selector: 'app-dop9',
  standalone: true,
  imports: [
    NgIf,
    FocusTrapDirective
  ],
  templateUrl: './dop9.component.html',
  styleUrl: './dop9.component.scss'
})
export class Dop9Component {
  showModal: boolean = false;

  toggleModal(): void {
    this.showModal = !this.showModal;
  }
}
