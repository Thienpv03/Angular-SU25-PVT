import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './user-create.html',
  styleUrls: ['./user-create.css'],
})
export class UserCreate {
  userForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['user', Validators.required],
    });
  }

  handleSubmit() {
    if (this.userForm.valid) {
      const newUser = this.userForm.value;
      this.isSubmitting = true;

      this.http.post('http://localhost:3000/users', newUser).subscribe({
        next: () => {
          alert(' User created successfully!');
          this.userForm.reset({ role: 'user' });
          this.isSubmitting = false;
        },
        error: (err) => {
          console.error(' Error creating user:', err);
          alert('Đã xảy ra lỗi khi tạo user.');
          this.isSubmitting = false;
        },
      });
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
