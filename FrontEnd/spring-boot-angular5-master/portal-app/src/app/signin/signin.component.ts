import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: []
})
export class SigninComponent implements OnInit {

  users: User[];
  user: User = new User();


  constructor(private router: Router, private signinService: SigninService) {

  }

  ngOnInit() {
    this.signinService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.signinService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  authenticate(userName,password): void{
    this.signinService.authenticate(userName,password).subscribe(data=>{
      
      if(data==null)
      {
        alert("Incorrect Credentials");
      }
      else{
        sessionStorage.setItem('id',data.id);
        this.router.navigate(['home']);
        localStorage.setItem('storeuserdata',JSON.stringify(data));
      }
    })
  }

}


