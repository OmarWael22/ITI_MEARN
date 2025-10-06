import { user } from './../types';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

interface UserIntter {
  func1(): any;
  func2(): any;
}

class Class1 implements UserIntter {
  constructor() {}

  func1() {
    console.log('object');
  }
  func2() {
    console.log('object');
  }
}

@Component({
  selector: 'app-table-comp',
  imports: [],
  templateUrl: './table-comp.html',
  styles: ``,
})
//  DoCheck
// OnChanges,
// OnInit,
// OnDestroy,
// AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked
export class TableComp implements OnInit, OnChanges {
  // => Shallow , Deep
  // => primitive =>
  @Input('users') usersData: user[] = [];
  // @Input() name: string = '';
  // @Input() ffff: any = {};
  // countCD: number = 0;
  // primitive || Nonprimitive
  // primitive => value
  // Nonprimitive => refernce
  // @Input('users') usersData: user[] = [];
  // @Input('users') usersArr: user[] = [];
  usersArr: user[] = [];
  other: user = { id: '', name: '', age: '' };
  // func() {}
  // fun() {
  //   this.usersArr.push(this.usersData);
  // }
  // lifecycle hooks
  // instance of TableComp
  // constructor() {
  //   console.log('constructor run');
  // }
  // this.usersArr.push(this.usersData);
  // console.log(this.usersData);
  //} //  => inject

  // run with CD
  // run when inputs update
  ngOnChanges(chages: SimpleChanges) {
    console.log('ngOnChanges', chages);
    if (chages['usersData'].firstChange) return;
    console.log(this.usersArr);
    // this.usersArr.push(this.usersData);
    // this.usersData = { id: '', name: '', age: '' };
  }

  ngOnInit() {
    // this.usersData = this.other;
    console.log('ngOnInit run');
    // console.log(this.usersData);
  }
  // ngDoCheck(): void {
  //   // havy logic
  //   this.countCD += 1;
  //   console.log('ngDoCheck');
  //   console.log(this.countCD);
  // }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked');
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit');
  // } //
  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked');
  // } // CD -> Check view

  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy');
  // }
}

// 1-> Selector
// 2-> create comp -> instance hold states , @Input not exist
// 3-> Template Compile -> js instructions
// 4-> Create View -> structure AOT (build) -> in momory // (@Input bound)
// 5-> CD => (initial Change Detection) => evalute binding , directives , etc
// 1) ngOnChanges => will run when input updates
// 2) ngOnInit => comp initialized => once initial Change Detection
// initial Change Detection
// ngOnChanges => @Input Update
// 3) DoCheck
// 6-> Render (paint)
// ngAfterContentInit
// ngAfterContentChecked
//    -> ng-content

// @ViewChild , @ViewChildren , ElemetRef
