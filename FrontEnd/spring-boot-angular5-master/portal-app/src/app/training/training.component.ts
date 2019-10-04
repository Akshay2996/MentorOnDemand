import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  training: Training[];
  id=sessionStorage.getItem("id");
  constructor(private router: Router, private trainingService: TrainingService) {

  }

  ngOnInit() {
    this.trainingService.getTraining()
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
