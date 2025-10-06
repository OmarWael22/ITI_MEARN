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
  currProduct : Product = { name: '', description: '', imageUrl: '', rate: '' };
  recieveProduct(product : Product){

    this.currProduct = product
  }
  favProducts: Product[] = [];
  recieveFavProduct(product: Product) {
    if (!this.favProducts.includes(product)) {
      this.favProducts.push(product);
    }

  }
  deleteProduct(product: Product) {
    this.favProducts = this.favProducts.filter((currProduct) => {
      return currProduct.name != product.name;
    })
  }
  updateProduct(updateobj: { oldProduct: Product, newProduct: Product }) {
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
