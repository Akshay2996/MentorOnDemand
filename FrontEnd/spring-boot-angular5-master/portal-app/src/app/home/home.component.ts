import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { HomeService } from './home.service';
import { Training } from '../models/training.model';
import { Technology } from '../models/technology.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  id: string;
  users: User[];
  training: Training[];
  technology: Technology[];

  constructor(private router: Router, private homeService: HomeService) {

  }

  ngOnInit() {
      if(localStorage.length == 0){
          alert('Not Logged in, Please Login First');
          this.router.navigate(['startpage']);
        }

      else  {
          this.homeService.getUsers()
          .subscribe( data => {
            console.log(data);
            this.users = data;
          });
    
          var getuserdata=JSON.parse(localStorage.getItem('storeuserdata'));
          console.log(getuserdata);
          document.getElementById('l').innerHTML= getuserdata.firstName+" "+getuserdata.lastName;
          this.id = sessionStorage.getItem("id");
          this.homeService.getTraining()
              .subscribe( data => {
                this.training = data;
              });
    
          this.homeService.getTechnology()
              .subscribe( data => {
                this.technology = data;
              });

        }
  };

  deleteUser(user: User): void {
    this.homeService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };


  logout()
  {
    sessionStorage.removeItem('id');
    window.localStorage.clear();
    this.router.navigate(['startpage']);
  }

  enroll(){
    alert('Enrolled Successfully');
    this.router.navigate(['paymentuser']);
  }

}


