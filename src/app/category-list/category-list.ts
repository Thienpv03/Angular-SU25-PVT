import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Category, CategoryService } from '../services/category.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './category-list.html',
  styleUrls: ['./category-list.css'],
})
export class CategoryList implements OnInit {
  searchTerm: string = '';
  categories: Category[] = [];
  errorMessage: string | null = null;

  constructor(
    private categoryService: CategoryService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService['getCategories']().subscribe({
      next: (data: Category[]) => (this.categories = data),
      error: (err: { message: string | null; }) => (this.errorMessage = err.message),
    });
  }

  filteredCategories(): Category[] {
    const keyword = this.searchTerm.trim().toLowerCase();
    return this.categories.filter(category =>
      category.name.toLowerCase().includes(keyword)
    );
  }
handleDelete(id: number) {
    if (confirm('Bạn có chắc muốn xóa sản phẩm này không?')) {
      this.http.delete(`http://localhost:3000/categories/${id}`).subscribe({
        next: () => {
          alert('Đã xóa thành công');
          this.categories = this.categories.filter(p => p.id !== id);
        },
        error: (err: any) => console.error('Lỗi khi xóa:', err)
      });
    }
  }
}
