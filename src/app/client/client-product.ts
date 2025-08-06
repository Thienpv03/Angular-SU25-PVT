import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  inStock: boolean;
}

@Component({
  selector: 'app-client-product',
  templateUrl: './client-product.html',
  styleUrls: ['./client-product.css'],
  imports: [CommonModule],
})
export class ClientProduct implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:3000/products').subscribe((data) => {
      this.products = data;
    });
  }
  buy(product: Product) {
  alert(`Bạn đã mua: ${product.name}`);
}

}
