import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css'],
})
export class UserList {
  searchTerm: string = '';

  users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'a@gmail.com' },
    { id: 2, name: 'Trần Thị B', email: 'b@gmail.com' },
    { id: 3, name: 'Phạm Văn C', email: 'c@gmail.com' },
    { id: 4, name: 'Lê Thị D', email: 'd@gmail.com' },
  ];

  filteredUsers() {
    const keyword = this.searchTerm.trim().toLowerCase();
    return this.users.filter(user =>
      user.name.toLowerCase().includes(keyword) ||
      user.email.toLowerCase().includes(keyword)
    );
  }
}
