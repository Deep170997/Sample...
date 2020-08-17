import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentgatewayComponent } from './shopping-cart/paymentgateway/paymentgateway.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { ProductItemComponent } from './shopping-cart/product-list/product-item/product-item.component';

const routes: Routes = [
  {path : '', redirectTo : '/shopping-cart', pathMatch : 'full'},
  {path : 'shopping-cart' , component:ShoppingCartComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'dashboard' , component : DashboardComponent},
  {path : 'payementgateway' , component: PaymentgatewayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ShoppingCartComponent,LoginComponent,ProductListComponent,ProductItemComponent
  ,DashboardComponent,PaymentgatewayComponent]
