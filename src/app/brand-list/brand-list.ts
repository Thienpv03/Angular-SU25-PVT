import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './brand-list.html',
  styleUrls: ['./brand-list.css'],
})
export class BrandList {
  brands = [
    { id: 1, name: 'Manchester United' },
    { id: 2, name: 'Real Madrid' },
    { id: 3, name: 'Bayern Munich' },
    { id: 4, name: 'PSG' },
    { id: 5, name: 'AC Milan' },
  ];

  filterText = '';

  filterBrands() {
    return this.brands.filter(brand =>
      brand.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
