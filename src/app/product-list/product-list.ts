import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList {
  products = [
    {
      id: 1,
      name: 'Áo Manchester United 2024',
      price: 550000,
      inStock: true,
      description: 'Áo sân nhà chính thức của MU mùa giải 2024, thiết kế đỏ truyền thống với logo sắc nét.'
    },
    {
      id: 2,
      name: 'Áo Real Madrid Sân Nhà 2024',
      price: 600000,
      inStock: false,
      description: 'Mẫu áo trắng biểu tượng của Real Madrid mùa 2024, sang trọng và lịch lãm.'
    },
    {
      id: 3,
      name: 'Áo Barcelona Sân Khách 2024',
      price: 580000,
      inStock: true,
      description: 'Áo sân khách của Barca với màu xanh đậm mạnh mẽ và logo truyền thống.'
    },
  ];

  filterText = '';

  filterProducts() {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
