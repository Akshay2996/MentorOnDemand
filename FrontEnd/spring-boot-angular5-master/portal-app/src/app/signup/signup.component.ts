import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit{

  users: User[];
  user: User = new User();

  constructor(private router: Router, private signupService: SignupService) {

  }

  ngOnInit() {
    this.signupService.getUser()
      .subscribe( data => {
        this.users = data;
      });
  };


  deleteUser(user: User): void {
    this.signupService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  createUser(): void {
    this.signupService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully");
        });

  }
}
