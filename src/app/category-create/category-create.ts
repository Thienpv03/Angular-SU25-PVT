import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './category-create.html',
  styleUrls: ['./category-create.css'],
})
export class CategoryCreate {
  categoryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  handleSubmit() {
    if (this.categoryForm.valid) {
      const newCategory = this.categoryForm.value;
      console.log(' New Category:', newCategory);
      alert(' Category created successfully!');
      this.categoryForm.reset();
    } else {
      this.categoryForm.markAllAsTouched();
    }
  }
}
