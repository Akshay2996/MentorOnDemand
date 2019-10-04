import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { SignupmentorService } from './signupmentor.service';

@Component({
  selector: 'app-signupmentor',
  templateUrl: './signupmentor.component.html',
  styles: []
})
export class SignupmentorComponent implements OnInit {

  mentors: Mentor[];
  mentor: Mentor = new Mentor();

  constructor(private router: Router, private signupmentorService: SignupmentorService) {

  }

  ngOnInit() {
    this.signupmentorService.getMentor()
      .subscribe( data => {
        this.mentors = data;
      });
  };

  deleteMentor(mentor: Mentor): void {
    this.signupmentorService.deleteMentor(mentor)
      .subscribe( data => {
        this.mentors = this.mentors.filter(u => u !== mentor);
      })
  };

  createMentor(): void {
    this.signupmentorService.createMentor(this.mentor)
        .subscribe( data => {
          alert("Mentor created successfully");
        });

}

}