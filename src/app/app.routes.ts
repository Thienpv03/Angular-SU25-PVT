import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { CategoryList } from './category-list/category-list';
import { BrandList } from './brand-list/brand-list';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductList,
  },
  {
    path: 'products/:id',
    component: ProductDetail,
  },
  {
    path: 'categories',
    component: CategoryList,
  },
  {
    path: 'brands',
    component: BrandList,
  },
];