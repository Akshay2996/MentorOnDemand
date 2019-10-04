import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-trainingcompleted',
  templateUrl: './trainingcompleted.component.html',
  styleUrls: ['./trainingcompleted.component.css']
})
export class TrainingCompletedComponent implements OnInit {
  training: Training[];
  id=sessionStorage.getItem("id");
  constructor(private router: Router, private trainingService: TrainingService) {

  }

  ngOnInit() {
    this.trainingService.getTrainingCompleted()
      .subscribe( data => {
        this.training = data;
        })

  };

  deleteTraining(training: Training): void {
    this.trainingService.deleteTraining(training)
      .subscribe( data => {
        this.training = this.training.filter(u => u !== training);
      })
  };


}
