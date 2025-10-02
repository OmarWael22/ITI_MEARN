import { Component, ViewEncapsulation } from '@angular/core';
import { Second } from '../second/second';

// angular -> class compnent -> selector , template (meta data)
@Component({
  selector: 'app-first',
  templateUrl: './first.html', // external Template
  //   template: `<h1>Hello</h1>`, // inline Template
  //   styles: [
  //     `
  //       h1 {
  //         background-color: red;
  //         // color: goldenrod;
  //         // padding: 10px;
  //         // text-align: center;
  //       }
  //     `,
  //   ],
  styleUrl: './first.css',
  imports: [Second],
  //   styleUrls: ['./first.css', './first2.css'],
  //   imports: [],
  //   providers: [],
  // encapsulation: ViewEncapsulation.None, // global style
})
export class Frist {
}
