import { Component,Input,EventEmitter,Output } from '@angular/core';
import { Product } from '../../../types';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-display-products',
  imports: [FormsModule],
  templateUrl: './display-products.html',
  styleUrl: './display-products.css'
})
export class DisplayProducts {
  @Input() currProductsArr: Product[] = [];
  @Output() favProductEvent = new EventEmitter<Product>();
  @Output() deleteProductEvent = new EventEmitter<Product>();
  @Output() updateProductEvent = new EventEmitter<{ oldProduct: Product, newProduct: Product }>();
  sendFavProduct(product: Product) {
    this.favProductEvent.emit(product)
  }
  deleteProduct(product: Product) {
    this.deleteProductEvent.emit(product);
  }
  updatedProduct: Product = { name: '', price: '', category: '' };
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
    console.log({
      "oldProduct": product,
      "newProduct" : this.updatedProduct
    });
    this.updatedProduct = { name: '', price: '', category: ''}
  }
}
