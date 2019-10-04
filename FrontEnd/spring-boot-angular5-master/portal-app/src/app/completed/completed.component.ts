import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { CompletedService } from './completed.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styles: []
})
export class CompletedComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private completedService: CompletedService) {

  }

  ngOnInit() {
    this.completedService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.completedService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


