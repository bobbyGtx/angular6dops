import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Dop1Component} from "./dop1/dop1.component";
import {Dop2Component} from "./dop2/dop2.component";
import {Dop3Component} from "./dop3/dop3.component";
import {Dop4Component} from "./dop4/dop4.component";
import {Dop5Component} from "./dop5/dop5.component";
import {Dop6Component} from "./dop6/dop6.component";
import {Dop7Component} from "./dop7/dop7.component";
import {Dop8Component} from "./dop8/dop8.component";
import {Dop8rComponent} from "./dop8r/dop8r.component";
import {Dop9Component} from "./dop9/dop9.component";
import {Dop10Component} from "./dop10/dop10.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Dop1Component, Dop2Component, Dop3Component, Dop4Component, Dop5Component, Dop6Component, Dop7Component, Dop8Component, Dop8rComponent, Dop9Component, Dop10Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lesson6dops';
}
