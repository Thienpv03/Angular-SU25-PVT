import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css'],
})
export class ProductDetail implements OnInit {
  productId: string | null = null;
  selectedProduct: any = null;

  constructor(private route: ActivatedRoute) {}

  product = [
    {
      id: 1,
      name: 'Áo Chelsea 2025',
      price: 550000,
      inStock: true,
      description: 'Áo sân nhà chính thức của Chelsea mùa giải 2025, thiết kế xanh dương truyền thống với vân áo mới mẻ.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQac5J6YK4kEGanDtDnfWXEnMNIJo7_lH_GcA&s',
    },
    {
      id: 2,
      name: 'Áo Real Madrid Sân Nhà 2025',
      price: 600000,
      inStock: false,
      description: 'Mẫu áo trắng biểu tượng của Real Madrid mùa 2024, sang trọng và lịch lãm.',
      image: '',
    },
    {
      id: 3,
      name: 'Áo Barcelona Sân Khách 2025',
      price: 580000,
      inStock: true,
      description: 'Áo sân khách của Barca với màu xanh đậm mạnh mẽ và logo truyền thống.',
      image: ''
    },
    {
      id: 4,
      name: 'Áo Manchester United 2025',
      price: 550000,
      inStock: true,
      description: 'Áo sân nhà chính thức của MU mùa giải 2024, thiết kế đỏ truyền thống với logo sắc nét.',
      image: ''
    },
  ];

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get("id");

    if (this.productId) {
      const idNumber = Number(this.productId);
      this.selectedProduct = this.product.find(p => p.id === idNumber);
    }
  }
}
