import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { BrandService, Brand } from '../services/brand.service';
import { CategoryService, Category } from '../services/category.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './product-create.html',
  styleUrls: ['./product-create.css'],
})
export class ProductCreate implements OnInit {
  productForm: FormGroup;
  brands: Brand[] = [];
  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    private router: Router
  ) {
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

  ngOnInit(): void {
    this.brandService.getBrands().subscribe(data => this.brands = data);
    this.categoryService.getCategories().subscribe(data => this.categories = data);
  }

  handleSubmit() {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe({
        next: () => {
          alert('Product submitted successfully!');
          this.router.navigate(['/products']);
        },
        error: err => alert('Error: ' + err.message)
      });
    } else {
      this.productForm.markAllAsTouched();
    }
  }
}
