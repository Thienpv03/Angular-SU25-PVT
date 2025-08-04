import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-brand-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './brand-update.html',
  styleUrls: ['./brand-update.css'],
})
export class BrandUpdate implements OnInit {
  brandForm: FormGroup;
  brandId: string | null = null;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.brandForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.brandId = this.route.snapshot.paramMap.get('id');
    if (this.brandId) {
      this.loadBrand(this.brandId);
    }
  }

  loadBrand(id: string) {
    this.http.get<any>(`http://localhost:3000/brands/${id}`).subscribe({
      next: (brand) => {
        this.brandForm.patchValue({
          name: brand.name,
        });
      },
      error: (err) => {
        console.error('Failed to load brand:', err);
      },
    });
  }

  handleSubmit() {
    if (this.brandForm.valid && this.brandId) {
      this.isSubmitting = true;
      this.http.put(`http://localhost:3000/brands/${this.brandId}`, this.brandForm.value).subscribe({
        next: () => {
          alert('Brand updated successfully!');
          this.router.navigate(['/brands']);
        },
        error: (err) => {
          console.error('Failed to update brand:', err);
          alert('Đã xảy ra lỗi khi cập nhật brand.');
        },
        complete: () => {
          this.isSubmitting = false;
        },
      });
    } else {
      this.brandForm.markAllAsTouched();
    }
  }
}
