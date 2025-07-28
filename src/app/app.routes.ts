import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { CategoryList } from './category-list/category-list';
import { BrandList } from './brand-list/brand-list';
import { UserList } from './user-list/user-list';
import { ProductCreate } from './product-create/product-create';
import { CategoryCreate } from './category-create/category-create';
import { BrandCreate } from './brand-create/brand-create';
import { UserCreate } from './user-create/user-create';
import { ProductUpdate } from '../product-update/product-update';

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
  {
    path: 'add-category',
    component: CategoryCreate,
  },
  {
    path: 'add-brand',
    component: BrandCreate,
  },
  {
    path: 'add-user',
    component: UserCreate,
  },
  {
    path: 'update-product/:id',
    component: ProductUpdate,
  },
];