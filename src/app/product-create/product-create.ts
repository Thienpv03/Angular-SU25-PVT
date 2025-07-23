import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './product-create.html',
  styleUrls: ['./product-create.css'],
})
export class ProductCreate {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      inStock: [false],
    });
  }

  handleSubmit() {
    if (this.productForm.valid) {
      console.log('Form Submitted:', this.productForm.value);
    } else {
      this.productForm.markAllAsTouched();
    }
  }
}
