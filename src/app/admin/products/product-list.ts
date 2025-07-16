import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.services';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products-list.html'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  delete(id: number) {
    if (confirm('Bạn có chắc muốn xoá sản phẩm này?')) {
      this.productService.delete(id).subscribe(() => this.loadData());
    }
  }
}


