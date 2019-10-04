import  {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { Payment} from '../models/payment.model';
import { PaymentService } from './payment.service';
import { Training } from '../models/training.model';

@Component({
	selector: 'app-paymentuser',
    templateUrl: './paymentuser.component.html',
    styleUrls: []
})
export class PaymentUserComponent implements OnInit
{   
   
    payments: Payment[];
	trainings: Training=new Training();
    showId=false;
    users=sessionStorage.getItem('fname');
	Payid;
	amt;
    constructor(private router: Router, private paymentService: PaymentService)
	{

	}
    ngOnInit(){
	
		this.paymentService.getPayment1()
		.subscribe(data1=>{
			this.payments=data1;
		});


	}


	getTraining2(Pid,amount,payid)
	{
		this.Payid=payid;
		this.amt=amount;
		
		this.paymentService.getTraining2(Pid)
		.subscribe(data=>{
			this.trainings=data;
		});
		this.showId=!this.showId;
		
	}

	Payfees(amount){

		if(this.amt==0)
		{
			this.paymentService.Payfees(this.Payid,amount)
		.subscribe(data=>{
			alert("Fees Paid Successfully!");
		});
		
		}
		else{
			alert("Fees Already Paid");
        }
        this.router.navigate(['home']);
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
