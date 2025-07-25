import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-create.html',
  styleUrls: ['./user-create.css'],
})
export class UserCreate {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      
      role: ['user', Validators.required], 
    });
  }

  handleSubmit() {
    if (this.userForm.valid) {
      console.log(' New User:', this.userForm.value);
      alert(' User created successfully!');
      this.userForm.reset({ role: 'user' }); 
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
