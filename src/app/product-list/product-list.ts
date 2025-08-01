import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductService, Product } from '../services/product.service'; 
import { BrandService, Brand } from '../services/brand.service';
import { CategoryService, Category } from '../services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList implements OnInit {
  products: Product[] = [];
  brands: Brand[] = [];
  categories: Category[] = [];
  filterText = '';
  errorMessage: string | null = null;

  constructor(
    private productService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => this.errorMessage = err.message
    });

    this.brandService.getBrands().subscribe(data => this.brands = data);
    this.categoryService.getCategories().subscribe(data => this.categories = data);
  }

  filterProducts(): Product[] {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  getBrandName(brand: any): string {
  if (typeof brand === 'object' && brand !== null && 'name' in brand) {
    return brand.name;
  }
  const found = this.brands.find(b => String(b.id) === String(brand));
  return found ? found.name : 'Không rõ';
}

getCategoryName(category: any): string {
  if (typeof category === 'object' && category !== null && 'name' in category) {
    return category.name;
  }
  const found = this.categories.find(c => String(c.id) === String(category));
  return found ? found.name : 'Không rõ';
}




  handleDelete(id: number) {
    if (confirm('Bạn có chắc muốn xóa sản phẩm này không?')) {
      this.http.delete(`http://localhost:3000/products/${id}`).subscribe({
        next: () => {
          alert('Đã xóa thành công');
          this.products = this.products.filter(p => p.id !== id);
        },
        error: (err: any) => console.error('Lỗi khi xóa:', err)
      });
    }
  }
}
