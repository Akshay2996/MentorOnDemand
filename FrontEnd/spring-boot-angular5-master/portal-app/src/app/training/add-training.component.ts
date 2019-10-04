import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { TrainingService } from '../training/training.service';
import { Technology } from '../models/technology.model';
import { Mentor } from '../models/mentor.model';

@Component({
  templateUrl: './add-training.component.html'
})
export class AddTrainingComponent {

  training: Training = new Training();
  trainings: Training[];
  technology: Technology[];
  mentor: Mentor[];

  constructor(private router: Router, private trainingService: TrainingService) {

  }

  ngOnInit() {
    this.trainingService.getTechnology()
    .subscribe( data => {
      this.technology = data;
    });

    this.trainingService.getMentor()
    .subscribe( data => {
      this.mentor = data;
    });

    this.trainingService.getTraining()
    .subscribe( data => {
      this.trainings = data;
    });
  }


  createTraining(): void {
    this.trainingService.createTraining(this.training)
        .subscribe( data => {
          alert("Training Module added successfully.");
        });
  };

}
