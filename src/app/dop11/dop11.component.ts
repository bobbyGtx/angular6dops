import { Component } from '@angular/core';
import {CheckPermissionsDirective} from "./check-permissions.directive";

@Component({
  selector: 'app-dop11',
  standalone: true,
  imports: [
    CheckPermissionsDirective
  ],
  templateUrl: './dop11.component.html',
  styleUrl: './dop11.component.scss'
})
export class Dop11Component {
  permissions = ['editContent'];
}
