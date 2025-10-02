import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComp } from './components/firstComp/first';
import {SecondComp} from './second-comp/second-comp'
import { first } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComp,SecondComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstProject');
}
