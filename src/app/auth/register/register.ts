import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toast: ToastService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['user', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.toast.error('Vui lòng điền đầy đủ thông tin');
      return;
    }

    const formData = this.registerForm.value;

    this.authService.registerUser(formData).subscribe({
      next: () => {
        this.toast.success('Đăng ký thành công!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.toast.error(err.error?.message || 'Đăng ký thất bại');
      },
    });
  }
}
