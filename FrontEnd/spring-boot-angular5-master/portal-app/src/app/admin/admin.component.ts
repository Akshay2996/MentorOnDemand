import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private adminService: AdminService) {

  }

  ngOnInit() {
      this.adminService.getUsers()
      .subscribe( data => {
        this.users = data;
      });   
  };

  deleteUser(user: User): void {
    this.adminService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


