import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrandService, Brand } from '../services/brand.service';

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

  constructor(private brandService: BrandService) {}

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
}
