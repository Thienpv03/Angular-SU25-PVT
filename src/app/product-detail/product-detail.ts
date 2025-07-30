import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css'],
})
export class ProductDetail implements OnInit {
  productId: string | null = null;
  selectedProduct: any = null;
  isLoading = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');

    if (this.productId) {
      this.isLoading = true;
      this.http.get(`http://localhost:3000/products/${this.productId}`).subscribe({
        next: (data) => {
          this.selectedProduct = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching product:', err);
          this.isLoading = false;
        },
      });
    }
  }
}
