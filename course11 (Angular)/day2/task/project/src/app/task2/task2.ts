import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  imports: [],
  templateUrl: './task2.html',
  styleUrl: './task2.css'
})
export class Task2 {
  idx : number = 0
  imgsrcArr  = ["https://angular.io/assets/images/logos/angular/angular.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo20gq_fZgOP7g4RlRDx1KJSvsQcvr_SJurw&s",
    "https://cdn2.iconfinder.com/data/icons/designer-skills/128/angular-512.png"

  ]
  length : number = this.imgsrcArr.length
  IntervalID : number = 0;
  next(){
    this.idx +=1;
    this.idx %= this.length
  }
  prev(){
    this.idx -=1;
    if(this.idx == -1)
      this.idx = this.length -1;
  }
  start(){
    if(!this.IntervalID)
      this.IntervalID = setInterval(()=> this.next(),1000);
  }
  stop(){
    clearInterval(this.IntervalID);
    this.IntervalID = 0;
  }
}
