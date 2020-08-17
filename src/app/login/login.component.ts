import { Component, OnInit } from '@angular/core';
import { Custservice } from 'src/services/custservices';

import {Router} from '@angular/router'
import {Customer} from 'src/models/customer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  
  `]
})
export class LoginComponent implements OnInit {
  Username:string = "krishna";
  Password:string="1234";
  msg:String = ""

 // cust:Customer = null;
  cust;
  card;
  valuefound:boolean = false;
  sample;
  sample1;

  constructor(private custservice:Custservice, private router:Router) {
    
   
   }

  ngOnInit(): void {
  }
  Login(){
    
    this.custservice.customer = this.custservice.login(this.Username,this.Password);

    this.custservice.customer.subscribe((data=>{
      this.cust = data;
      if(this.cust== null){
        alert("invalid login")
        console.log("null")
      }
      else{
        console.log(this.custservice.customer);
        console.log(this.cust)
        console.log(this.cust.id)
        this.custservice.custcard = this.custservice.carddetails(this.cust.id);
        this.custservice.custcard.subscribe((data1=>{
            this.sample = data1;
            console.log(this.sample);
        
        }))
        console.log(this.cust.id);
        this.custservice.custCardType = this.custservice.cardTypeMaster(this.cust.id);
        this.custservice.custCardType.subscribe((data2=>{
            this.sample1 = data2;
            console.log(this.sample1);
        
        }))
        
        console.log(this.custservice.custcard);
        this.msg = "Loggedin"
        this.router.navigate(['/dashboard']);
      } 
    }))
  }
}