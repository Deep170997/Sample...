import {HttpClient} from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Customer } from 'src/models/customer';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Product } from 'src/models/product';



@Injectable()
export class Custservice{
   customer;// holds customer data post login
   custcard;// hold cust card data post login
   custCardType;
   products; // Hols all the products from tables>> product list
   item:Product; // Product for purchasal.
    constructor(private http:HttpClient){
    }

    public login(un:string,pswd:string){
       return this.http.get("http://localhost:50342/api/New?uname="+un+"&password="+pswd);
    }
    public carddetails(cid:any){
        return this.http.get("http://localhost:50342/api/New?id=1&cust_id="+cid.toString() );
    }
    public getProducts(){
        return this.http.get("http://localhost:50342/api/ProductList");
    }
    public payementplans(){
        return this.http.get("http://localhost:50342/api/PayementPlans");
    }
    public cardTypeMaster(cid:any){
        return this.http.get("http://localhost:50342/api/CardTypeMaster?cust_id="+cid.toString() );
    }

    

}   