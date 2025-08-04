import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './category-update.html',
  styleUrls: ['./category-update.css']
})
export class CategoryUpdate implements OnInit {
  categoryForm: FormGroup;
  isSubmitting = false;
  categoryId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    if (this.categoryId) {
      this.loadCategory(this.categoryId);
    }
  }

  loadCategory(id: string) {
    this.http.get<any>(`http://localhost:3000/categories/${id}`).subscribe({
      next: (category) => {
        this.categoryForm.patchValue({
          name: category.name
        });
      },
      error: (err) => console.error('Failed to load category:', err)
    });
  }

  handleSubmit() {
    if (this.categoryForm.valid && this.categoryId) {
      this.isSubmitting = true;
      this.http.put(`http://localhost:3000/categories/${this.categoryId}`, this.categoryForm.value).subscribe({
        next: () => {
          alert('Category updated successfully!');
          this.router.navigate(['/categories']);
          this.isSubmitting = false;
        },
        error: (err) => {
          console.error('Failed to update category:', err);
          alert('Đã xảy ra lỗi khi cập nhật category.');
          this.isSubmitting = false;
        }
      });
    } else {
      this.categoryForm.markAllAsTouched();
    }
  }
}
