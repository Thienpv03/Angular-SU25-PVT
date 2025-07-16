import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsList } from './admin/products/product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
