import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { CategoryList } from './category-list/category-list';
import { BrandList } from './brand-list/brand-list';
import { UserList } from './user-list/user-list';
import { ProductCreate } from './product-create/product-create';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductList,
  },
  {
    path: 'product/:id',
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
  {
    path: 'users',
    component: UserList,
  },
   {
    path: 'add-product',
    component: ProductCreate,
  },
];