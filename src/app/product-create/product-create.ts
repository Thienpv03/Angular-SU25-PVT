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

  categories = ['Premier League ', 'La Liga', 'Bundesliga', 'Ligue 1', '	Serie A', 'Đội tuyển quốc gia'];
  brands = ['Chelsea', 'Real Madrid', 'Bayern Munich', 'PSG', '	AC Milan', 'Manchester United'];

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
      console.log('Form Submitted:', this.productForm.value);
      alert(' Product submitted successfully!');
      this.productForm.reset();
    } else {
      this.productForm.markAllAsTouched();
    }
  }
}
