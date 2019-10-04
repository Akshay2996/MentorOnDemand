import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { TraineridService } from './trainerid.service';

@Component({
  selector: 'app-trainerid',
  templateUrl: './trainerid.component.html',
  styles: []
})
export class TraineridComponent implements OnInit {

  mentor: Mentor[];

  constructor(private router: Router, private traineridService: TraineridService) {

  }

  ngOnInit() {
    this.traineridService.getMentor()
      .subscribe( data => {
        this.mentor = data;
      });

      var getmentordata=JSON.parse(localStorage.getItem('storementordata'));
      console.log(getmentordata);
      document.getElementById('l').innerHTML= getmentordata.firstName+" "+getmentordata.lastName;
      document.getElementById('email').innerHTML= getmentordata.email;
      document.getElementById('contact').innerHTML= getmentordata.contactNumber;
  };

  deleteUser(mentor: Mentor): void {
    this.traineridService.deleteUser(mentor)
      .subscribe( data => {
        this.mentor = this.mentor.filter(u => u !== mentor);
      })
  };

}


