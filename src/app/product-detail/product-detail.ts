import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css'],
})
export class ProductDetail {
  product = {
    id: 1,
    name: 'Áo Manchester United 2024',
    price: 550000,
    image:
      'https://example.com/images/mu-2024.jpg',
    inStock: true,
  };
}
