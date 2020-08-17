import { Component, OnInit, Input } from '@angular/core';
import { Custservice } from 'src/services/custservices';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 custdata;
 card;
cust:Variable;
cardtypemaster;

  constructor(private customerService:Custservice , private router:Router) { 
   
  }

  ngOnInit(): void {
    this.cust = this.customerService.customer;
  }

  
  fetch(){
    console.log("Dashboard ")
 
   
  console.log(this.customerService.customer);
  console.log(this.customerService.custcard);
  console.log(this.customerService.custCardType);

  this.customerService.customer.subscribe((data=>{
   this.cust = data ; // customerMaster
  console.log(this.cust);
  }))

  this.customerService.custcard.subscribe((data1=>{
  this.card=   data1; //Carddetails with customerMaster, CardTypeMaster,CardDetails
  console.log(this.card);
    // console.log(this.card[0].CardTypeMaster.Type);
  }))
  this.customerService.custCardType.subscribe((data2=>{
    this.cardtypemaster = data2;
    console.log(this.cardtypemaster);
    console.log(this.cardtypemaster[0].Type);
  }))

  }
  ViewProducts(){
    this.router.navigate(['/shopping-cart'])
    this.customerService.products =this.customerService.getProducts();
    console.log(this.customerService.products);

    this.customerService.products.subscribe((data=>{
     console.log(data)
    }))

  }

}
