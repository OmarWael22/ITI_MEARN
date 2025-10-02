import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  imports: [],
  templateUrl: './task1.html',
  styleUrl: './task1.css'
})
export class Task1 {
  nameTracker : string = "";
  emailTracker : string = ""
  name : string = "Omar";
  email:string = "omar@mail.com"
  // nameFunc(val:HTMLInputElement){
  //   this.nameTracker = val.value
  // }
  // emailFunc(val:HTMLInputElement){
  //   this.emailTracker = val.value
  // }
  update(inpName:HTMLInputElement , inpEmail : HTMLInputElement){
    this.name = inpName.value;
    this.email = inpEmail.value;

    inpName.value = "";
    inpEmail.value = ""
  }
}
