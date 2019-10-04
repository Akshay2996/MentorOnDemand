import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UseridService } from './userid.service';

@Component({
  selector: 'app-userid',
  templateUrl: './userid.component.html',
  styles: []
})
export class UseridComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private useridService: UseridService) {

  }

  ngOnInit() {
    this.useridService.getUsers()
      .subscribe( data => {
        this.users = data;
      });

      var getuserdata=JSON.parse(localStorage.getItem('storeuserdata'));
      console.log(getuserdata);
      document.getElementById('l').innerHTML= getuserdata.firstName+" "+getuserdata.lastName;
      document.getElementById('email').innerHTML= getuserdata.email;
      document.getElementById('contact').innerHTML= getuserdata.contactNumber;
  };

  deleteUser(user: User): void {
    this.useridService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


