import { Component,Input,EventEmitter,Output, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../../types';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-display-products',
  imports: [FormsModule],
  templateUrl: './display-products.html',
  styleUrl: './display-products.css'
})
export class DisplayProducts implements OnChanges {
  @Input() addedProduct: Product = { name: '', description: '', imageUrl: '', rate: '' };
  productsArr: Product[] = [];
  @Output() favProductEvent = new EventEmitter<Product>();
  @Output() deleteProductEvent = new EventEmitter<Product>();
  @Output() updateProductEvent = new EventEmitter<{ oldProduct: Product, newProduct: Product }>();
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['addedProduct']?.firstChange) return
    if (changes['addedProduct'] && changes['addedProduct'].currentValue) {
      console.log(changes);
      const newProduct = changes['addedProduct'].currentValue as Product;
      // console.log(newProduct);
      this.productsArr.push(newProduct);
      // console.log(this.currProductsArr);
    }

  }
  sendFavProduct(product: Product) {
    this.favProductEvent.emit(product)
  }
  deleteProduct(product: Product) {
    this.productsArr = this.productsArr.filter((currProduct) => {
      return currProduct.name != product.name;
    });
    this.deleteProductEvent.emit(product);
  }
  updatedProduct: Product = { name: '', description: '', imageUrl: '', rate: '' };
  enableUpdate(product: Product) {
    product.isEditing = true;
    this.updatedProduct = { ...product };
  }
  sendUpdatedProduct(product: Product) {
    delete product.isEditing;
    delete this.updatedProduct.isEditing;
    this.updateProductEvent.emit({
      "oldProduct": product,
      "newProduct" : this.updatedProduct
    })
        // update prodcut in prodcutArr
    this.productsArr = this.productsArr.map((currProduct) => {
      if (currProduct.name == product.name) {
        return this.updatedProduct
      }
      else
        return currProduct
    })
    // console.log({
    //   "oldProduct": product,
    //   "newProduct" : this.updatedProduct
    // });
    this.updatedProduct = { name: '', description: '', imageUrl: '', rate: ''};
  }
}
