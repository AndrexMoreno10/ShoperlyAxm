import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin.component';
import { CategoryRoutingModule } from '../category/category-routing.module';
import { ProductRoutingModule } from '../product/product-routing.module';
import { SupplierRoutingModule } from '../supplier/supplier-routing.module';

const routes: Routes = [
  {
    path: '', 

    children: [


      { path: 'categoryAdmin', loadChildren: () => import('../category/category.module').then(m => m.CategoryModule) },
      { path: 'productAdmin', loadChildren: () => import('../product/product.module').then(m => m.ProductModule) },
      { path: 'supplierAdmin', loadChildren: () => import('../supplier/supplier.module').then(m => m.SupplierModule) },

    ]

  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }
