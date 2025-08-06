import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type RegisterForm = {
  name: string;
  email: string;
  password: string;
  role: string;
};

type LoginForm = {
  email: string;
  password: string;
};

type LoginRes = {
  user(user: any): string;
  accessToken: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(values: RegisterForm) {
    return this.http.post('http://localhost:3000/register', values);
  }

  loginUser(values: LoginForm) {
    return this.http.post<LoginRes>('http://localhost:3000/login', values);
  }
}
