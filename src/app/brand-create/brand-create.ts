import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-brand-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './brand-create.html',
  styleUrls: ['./brand-create.css'],
})
export class BrandCreate {
  brandForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.brandForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  handleSubmit() {
    if (this.brandForm.valid) {
      const newBrand = this.brandForm.value;
      this.isSubmitting = true;

      this.http.post('http://localhost:3000/brands', newBrand).subscribe({
        next: (res) => {
          alert(' Brand created successfully!');
          this.brandForm.reset();
          this.isSubmitting = false;
        },
        error: (err) => {
          console.error(' Failed to create brand:', err);
          alert('Đã xảy ra lỗi khi tạo brand.');
          this.isSubmitting = false;
        },
      });
    } else {
      this.brandForm.markAllAsTouched();
    }
  }
}
