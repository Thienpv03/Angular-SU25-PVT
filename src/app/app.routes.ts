import { Routes } from '@angular/router';
import { ProductsComponent } from './admin/products/product-list';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent }
];
