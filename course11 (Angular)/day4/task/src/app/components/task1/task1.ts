import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task1',
  imports: [FormsModule],
  templateUrl: './task1.html',
  styleUrl: './task1.css'
})
export class Task1 {
  // command : string = '';
  commandTrack : string = '';
  commandArr : string[] = []
  displayCommands(){
    if(this.commandTrack !=''){
      this.commandArr.push(this.commandTrack);
      this.commandTrack = '';
    }
  }
}
