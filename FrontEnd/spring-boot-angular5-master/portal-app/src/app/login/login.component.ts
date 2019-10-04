import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  mentors: Mentor[];
  mentor: Mentor = new Mentor();

  constructor(private router: Router, private loginService: LoginService) {

  }

  ngOnInit() {
    this.loginService.getMentor()
      .subscribe( data => {
        this.mentors = data;
      });
  };

  deleteMentor(mentor: Mentor): void {
    this.loginService.deleteMentor(mentor)
      .subscribe( data => {
        this.mentors = this.mentors.filter(u => u !== mentor);
      })
  };

  validate(userName,password): void{
    this.loginService.validate(userName,password).subscribe( data=> {
      
      if(data == null){
        alert("Invalid Credentials");
      }
      else{
        sessionStorage.setItem('id',data.id);
        this.router.navigate(['trainerhome']);
        localStorage.setItem('storementordata',JSON.stringify(data));
      }
    })
  }

}
