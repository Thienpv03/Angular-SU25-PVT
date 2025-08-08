import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'], 
})
export class Home implements OnInit {
  email: string | null = null;

  constructor(public router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        this.email = JSON.parse(user).email;
      } catch (error) {
        console.error('Lỗi khi đọc user:', error);
      }
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
