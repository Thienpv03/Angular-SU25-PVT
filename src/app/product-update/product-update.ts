import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './product-update.html',
  styleUrls: ['./product-update.css'],
})
export class ProductUpdate implements OnInit {
  productForm: FormGroup;
  brands: any[] = [];
  categories: any[] = [];
  productId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
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
    this.productId = this.route.snapshot.paramMap.get("id");
    this.fetchCategories();
    this.fetchBrands();
    if (this.productId) {
      this.loadProduct(this.productId);
    }
  }

  fetchCategories() {
    this.http.get<any[]>('http://localhost:3000/categories').subscribe({
      next: data => this.categories = data,
      error: err => console.error('Failed to load categories:', err)
    });
  }

  fetchBrands() {
    this.http.get<any[]>('http://localhost:3000/brands').subscribe({
      next: data => this.brands = data,
      error: err => console.error('Failed to load brands:', err)
    });
  }

  loadProduct(id: string) {
    this.http.get<any>(`http://localhost:3000/products/${id}`).subscribe({
      next: product => {
        this.productForm.patchValue({
          name: product.name,
          image: product.image,
          price: product.price,
          description: product.description,
          inStock: product.inStock,
          brand: product.brand?.id ?? '',        
          category: product.category?.id ?? ''   
        });
      },
      error: err => console.error('Failed to load product:', err)
    });
  }


  handleSubmit() {
  if (this.productForm.valid && this.productId) {
    this.http.put(`http://localhost:3000/products/${this.productId}`, this.productForm.value).subscribe({
      next: () => {
        alert('Product updated successfully!');
        this.router.navigate(['/products']);
      },
      error: err => console.error('Failed to update product:', err)
    });
  } else {
    this.productForm.markAllAsTouched();
  }
}

}
