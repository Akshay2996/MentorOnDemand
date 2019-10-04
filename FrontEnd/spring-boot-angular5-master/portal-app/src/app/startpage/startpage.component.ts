import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { StartpageService } from './startpage.service';
import { Technology } from '../models/technology.model';
import { Training } from '../models/training.model';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styles: []
})
export class StartpageComponent implements OnInit {

  users: User[];
  technology: Technology[];
  training: Training[];

  constructor(private router: Router, private startpageService: StartpageService) {

  }

  ngOnInit() {
    this.startpageService.getUsers()
      .subscribe( data => {
        this.users = data;
      });

      this.startpageService.getTechnology()
      .subscribe( data => {
        this.technology = data;
      });

      this.startpageService.getTraining()
      .subscribe( data => {
        this.training = data;
      });
  };

  deleteUser(user: User): void {
    this.startpageService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


