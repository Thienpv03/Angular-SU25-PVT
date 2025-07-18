import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.html',
  styleUrls: ['./category-list.css'],
})
export class CategoryList {
  categories = [
    { id: 1, name: 'Premier League' },
    { id: 2, name: 'La Liga' },
    { id: 3, name: 'Bundesliga' },
    { id: 4, name: 'Ligue 1' },
    { id: 5, name: 'Serie A' },
    { id: 6, name: 'Đội tuyển quốc gia' },
  ];
}
