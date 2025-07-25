import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-brand-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './brand-create.html',
  styleUrls: ['./brand-create.css'],
})
export class BrandCreate {
  brandForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.brandForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  handleSubmit() {
    if (this.brandForm.valid) {
      const newBrand = this.brandForm.value;
      console.log(' New Brand:', newBrand);
      alert(' Brand created successfully!');
      this.brandForm.reset();
    } else {
      this.brandForm.markAllAsTouched();
    }
  }
}
