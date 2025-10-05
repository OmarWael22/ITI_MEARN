import { Component } from '@angular/core';
import {AddProduct} from './add-product/add-product';
import { DisplayProducts } from './display-products/display-products';
import { Product } from '../../types';
@Component({
  selector: 'app-task2',
  imports: [AddProduct , DisplayProducts],
  templateUrl: './task2.html',
  styleUrl: './task2.css'
})
export class Task2 {
  productArr : Product[] =[]
  recieveProduct(product : Product){
    this.productArr.push(product);
    this.productArr.forEach((prod)=>{
      console.log(prod);
    })
  }
}
