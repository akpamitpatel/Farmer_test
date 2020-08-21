import { NgForm } from '@angular/forms';
import { Component} from '@angular/core';

@Component({
  selector: 'bidderregistration',
  templateUrl: './bidderregistration.component.html',
  styleUrls: ['./bidderregistration.component.css']
})
export class BidderregistrationComponent{
  
register: Register = new Register();
  constructor() { }
  process(f : NgForm){
    if(this.register.password === this.register.confirmPassword)
    {
      alert("Password match ")
    }
    else{
      alert("Password Does not match ")
    }
  }

  reset(){
    
  }


}
class Register{
  uname: string;
  contact:number;
  email:string;
  password:string;
  confirmPassword:string;
  address: Address = new Address();
  land: Land = new Land();
  account: Account = new Account();
   document: Document = new Document();


}
class Address{

  line1:string;
  line2:string;
  state:string;
  city:string;
  pin:number;

}
class Land{
  area:string;
  addres:string;
  pin2:number;

}
class Account{
  accountno:number;
  ifsc:string;

}
class Document{
  addhar:number;
  pan:string;
  addharfile: File;
  panfile:File;
}
