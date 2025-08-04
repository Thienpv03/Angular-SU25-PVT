import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrandService, Brand } from '../services/brand.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './brand-list.html',
  styleUrls: ['./brand-list.css'],
})
export class BrandList implements OnInit {
  brands: Brand[] = [];
  filterText = '';
  errorMessage: string | null = null;

  constructor(
    private brandService: BrandService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands(): void {
    this.brandService.getBrands().subscribe({
      next: (data) => (this.brands = data),
      error: (err) => (this.errorMessage = err.message),
    });
  }

  filterBrands(): Brand[] {
    const keyword = this.filterText.toLowerCase().trim();
    return this.brands.filter((brand) =>
      brand.name.toLowerCase().includes(keyword)
    );
  }


handleDelete(id: number) {
    if (confirm('Bạn có chắc muốn xóa sản phẩm này không?')) {
      this.http.delete(`http://localhost:3000/brands/${id}`).subscribe({
        next: () => {
          alert('Đã xóa thành công');
          this.brands = this.brands.filter(p => p.id !== id);
        },
        error: (err: any) => console.error('Lỗi khi xóa:', err)
      });
    }
  }
}
