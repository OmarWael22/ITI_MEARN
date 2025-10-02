import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  // imports: [Frist],
  imports : [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  // encapsulation: ViewEncapsulation.None,
})
export class App {
  title: string = 'App Comp Here';
  imgSrc: string = 'images/istockphoto-1921245622-612x612.webp';
  cols: number = 4;
  name: string = 'KOKO';
  className: string = 'active';
  // isActive: boolean = true;
  // isActive: string = 'true';
  isActive: any = {};
  objStyle: any = {
    'background-color': 'black',
    color: 'goldenrod',
    padding: '10px',
    'text-align': 'center',
  };
  fontVal: number = 15;

  func(val: HTMLInputElement) {
    this.name = val.value;
    // console.log(val);
  }
}

// Emulation (Encapsulation) ->
