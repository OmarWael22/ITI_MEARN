import { Component } from '@angular/core';
import { FromComp } from './from-comp/from-comp';
import { user } from './types';
import { TableComp } from './table-comp/table-comp';

@Component({
  selector: 'app-root',
  imports: [FromComp, TableComp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  ///// 651246263
  ///// 6546464
  // user: user = { id: '', name: '', age: '' };
  title = 'kjvlskadjsdlkjfhsdf';
  user: user[] = [];
  hide: boolean = true;
  reciveData(data: user) {
    // this.user = data;
    this.user = [data, ...this.user];
  }
  hideFun() {
    this.hide = false;
  }
  // hideFun() {
  //   this.title = 'false';
  // }
}
