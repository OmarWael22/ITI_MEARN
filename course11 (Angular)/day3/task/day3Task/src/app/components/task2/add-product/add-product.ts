import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../types';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {
  product : Product = {name:'',price:'',category:''}
  @Output() addProductEvent = new EventEmitter<Product>();
  sendProduct(){
    if(this.product.name != ''
      && this.product.price != ''
      &&  this.product.category != ''){
        this.addProductEvent.emit(this.product);
    }
    this.product = { name: '', price: '', category: '' };
  }
}
