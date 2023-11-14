import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { CategoryRoutingModule } from './category/category-routing.module';
import { SupplierRoutingModule } from './supplier/supplier-routing.module';
import { ProductRoutingModule } from './product/product-routing.module';
import { SearchModule } from './search/search.module';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { DashboardUserModule } from './dashboard-user/dashboard-user.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardAdminModule } from './dashboard-admin/dashboard-admin.module';



const routes: Routes = [

// Hay que dividir las rutas por cada modulo

{path:'', component: DashboardUserComponent, loadChildren:()=>import("./dashboard-user/dashboard-user.module").then(x=>DashboardUserModule)},
{path:'admin', component: DashboardAdminComponent, loadChildren:()=>import("./dashboard-admin/dashboard-admin.module").then(x=>DashboardAdminModule)},
{path:'Login', component:LoginComponent},



{path: 'searching/:keyword', loadChildren:() => SearchModule},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
