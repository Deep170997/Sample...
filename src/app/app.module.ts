import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router'

import {HttpClientModule} from '@angular/common/http';
import {Custservice} from '../services/custservices'
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PaymentgatewayComponent } from './shopping-cart/paymentgateway/paymentgateway.component';
import { ProductItemComponent } from './shopping-cart/product-list/product-item/product-item.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';

var myRoutes:Routes= [
  {path:"Login",component:LoginComponent,children:[
    {path:"Dasboard",component:DashboardComponent}
  ]}

]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    Dashboard1Component,
    ShoppingCartComponent,
    PaymentgatewayComponent,
    ProductItemComponent,
    ProductListComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [Custservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
