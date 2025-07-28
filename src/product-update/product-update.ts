import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";



@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-update.html',
  styleUrls: ['./product-update.css'],
})

export class ProductUpdate{
    productForm : FormGroup;

    constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      brand: ['', Validators.required],
      inStock: [false],
    });
  }
  handleSubmit() {
    if (this.productForm.valid) {
      console.log('Form data:', this.productForm.value);
    } else {
      this.productForm.markAllAsTouched();
    }
  }
}

