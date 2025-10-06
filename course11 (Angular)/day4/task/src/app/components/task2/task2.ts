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
  productArr: Product[] = []
  currProduct : Product = { name: '', description: '', imageUrl: '', rate: '' };
  recieveProduct(product : Product){
    this.productArr.push(product);
    // this.productArr.forEach((prod)=>{
    //   console.log(prod);
    // })
  }
  favProducts: Product[] = [];
  recieveFavProduct(product: Product) {
    if (!this.favProducts.includes(product)) {
      this.favProducts.push(product);

    }
    // this.favProducts.forEach((prod)=>{
    //   console.log(prod);
    // })
  }
  deleteProduct(product: Product) {
    this.productArr = this.productArr.filter((currProduct) => {
      return currProduct.name != product.name;
    });
    this.favProducts = this.favProducts.filter((currProduct) => {
      return currProduct.name != product.name;
    })
  }
  updateProduct(updateobj: { oldProduct: Product, newProduct: Product }) {
    // update prodcut in prodcutArr
    this.productArr = this.productArr.map((currProduct) => {
      if (currProduct.name == updateobj.oldProduct.name) {
        return updateobj.newProduct
      }
      else
        return currProduct
    })
    // update product in favproducts
    this.favProducts = this.favProducts.map((currProduct) => {
      if (currProduct.name == updateobj.oldProduct.name) {
        return updateobj.newProduct
      }
      else
        return currProduct
    })
  }
}
