import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Payment} from '../models/payment.model';
import { PaymentService } from './payment.service';
import { Training } from '../models/training.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
    payment: Payment[];
    training: Training = new Training();
    amt=0;
	  Pid=0;
	  Remark="0 of 4";
	  commission;
    showId=false;
    displayId=false;
    
  constructor(private router: Router, private paymentService: PaymentService) {

  }

  ngOnInit() {
    this.paymentService.getPayment()
      .subscribe( data => {
        this.payment = data;
      });

      
  };

  public getTraining1(Paid,x,id) {
        
    this.amt=x;
    this.Pid=id;
    this.paymentService.getTraining1(Paid)
    .subscribe( data2 => {
      this.training = data2;
    })
    this.showId=!this.showId;
  }
  
  setAmount(progress,commission)
	{ 

		this.amt=(this.amt-(this.amt*(commission/100)));
    this.amt=(this.amt/4);
    
      if(progress<=25 && progress>0)
      {
        this.amt=this.amt;
        this.Remark="1 of 4";
        alert("First Payment Done");
        
      }

      else if(progress<=50 && progress>25)
      {
        this.amt=this.amt;
        this.Remark="2 of 4";
        alert("Second Payment Done");
        
      }
    
      else if(progress<=75 && progress>50)
      {
        this.amt=this.amt;
        this.Remark="3 of 4";
        alert("Third Payment Done");
        
      }

      else if(progress<=100 && progress>75)
      {
        this.amt=this.amt;
        this.Remark="4 of 4";
        alert("Full Payment Done");
        
      }
		
		this.paymentService.setAmount(this.amt,this.Remark,this.Pid)
		.subscribe(data2=>{

		});
  }


  
  setCommission(commission,Tid)
	{
		this.paymentService.setCommission(commission,Tid)
		.subscribe(data=>{
			alert("Commission-amount Changed Sucessfully!")
		});
    }
    

    
    toggleId()
    {
        this.displayId=!this.displayId;
    }



  deletePayment(payment: Payment): void {
    this.paymentService.deletePayment(payment)
      .subscribe( data => {
        this.payment = this.payment.filter(u => u !== payment);
      })
  };


}
