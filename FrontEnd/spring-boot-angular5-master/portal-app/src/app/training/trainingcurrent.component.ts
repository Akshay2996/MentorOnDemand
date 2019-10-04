import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { TrainingService } from '../training/training.service';

@Component({
  selector: 'app-trainingcurrent',
  templateUrl: './trainingcurrent.component.html',
  styleUrls: ['./trainingcurrent.component.css']
})
export class TrainingCurrentComponent implements OnInit {
  training: Training[];
  id=sessionStorage.getItem("id");
  constructor(private router: Router, private trainingService: TrainingService) {

  }

  ngOnInit() {
      this.trainingService.getTrainingCurrent()
        .subscribe( data => {
          this.training = data;
        });

  };

  deleteTraining(training: Training): void {
    this.trainingService.deleteTraining(training)
      .subscribe( data => {
        this.training = this.training.filter(u => u !== training);
      })
  };


}
