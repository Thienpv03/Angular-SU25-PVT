import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Category, CategoryService } from '../services/category.service';


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

  constructor(private categoryService: CategoryService) {}

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
}
