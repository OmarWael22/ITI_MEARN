import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../../../types';
import { FormBuilder,FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct implements OnInit{
  product : Product = { name: '', description: '', imageUrl: '', rate: '' };
  @Output() addProductEvent = new EventEmitter<Product>();
  productForm! : FormGroup
  ngOnInit(): void {
    this.productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      imageUrl: new FormControl('', [
        Validators.required,
        Validators.pattern(/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i)
      ]),
      rate: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(5)
      ])
    });
  }

  sendProduct(){
    if (this.productForm.valid) {
      console.log(
        this.productForm.value
      );
      this.addProductEvent.emit(this.productForm.value);
      this.productForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
