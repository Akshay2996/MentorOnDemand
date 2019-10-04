import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { TrainingService } from './training.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-trainingdetailsforuser',
  templateUrl: './trainingdetailsforuser.component.html',
  styleUrls: []
})
export class TrainingdetailsforuserComponent implements OnInit {
  training: Training[];
  users: User[];
  id:string;

  constructor(private router: Router, private trainingService: TrainingService) {

  }

  ngOnInit() {
    this.id=sessionStorage.getItem("id");
    this.trainingService.getTrainingByUsersId()
      .subscribe( data => {
        this.training = data;
      });

      this.trainingService.getUserTraining()
      .subscribe( data1 => {
        this.users = data1;
      });

  };



}
