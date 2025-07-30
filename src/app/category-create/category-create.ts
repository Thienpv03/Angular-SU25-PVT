import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './category-create.html',
  styleUrls: ['./category-create.css'],
})
export class CategoryCreate {
  categoryForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  handleSubmit() {
    if (this.categoryForm.valid) {
      const newCategory = this.categoryForm.value;
      this.isSubmitting = true;

      this.http.post('http://localhost:3000/categories', newCategory).subscribe({
        next: (res) => {
          alert(' Category created successfully!');
          this.categoryForm.reset();
          this.isSubmitting = false;
        },
        error: (err) => {
          console.error(' Failed to create category:', err);
          alert('Đã xảy ra lỗi khi tạo category.');
          this.isSubmitting = false;
        },
      });
    } else {
      this.categoryForm.markAllAsTouched();
    }
  }
}
