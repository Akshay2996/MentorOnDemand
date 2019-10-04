import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Payment } from '../models/payment.model';
import { PaymentService } from '../payment/payment.service';
import { Training } from '../models/training.model';

@Component({
  selector: 'app-paymentmentor',
  templateUrl: './paymentmentor.component.html'
})
export class PaymentMentorComponent {

  payment: Payment[];
  training: Training = new Training();
  displayId=false;
  withdrawAmount;
  amount;
pid;
  users=sessionStorage.getItem('fname');
  constructor(private router: Router, private paymentService: PaymentService)
{

}

  ngOnInit() {
      this.paymentService.getPayments()
        .subscribe( data => {
          this.payment = data;
        });
    };

    
Withdraw(amt){
  if(amt>this.amount)
  {
      alert("Insufficient Balance");
  }
  else
  {
      this.paymentService.withdraw(this.pid,amt)
      .subscribe(data=>{
      alert("Withdraw Successfull !");
      });
  
  }


}

    toggleId(amount,pid)
    {
      this.amount=amount;
  this.pid=pid;
        this.displayId=!this.displayId;
    }


  logout()
  {
      sessionStorage.removeItem('role');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('fname');
      sessionStorage.removeItem('id');
      this.router.navigate(['home']);
      
  }

}
