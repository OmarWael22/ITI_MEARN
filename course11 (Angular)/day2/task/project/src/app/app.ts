import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Task1} from './task1/task1'
import {Task2} from './task2/task2'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Task1,Task2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
