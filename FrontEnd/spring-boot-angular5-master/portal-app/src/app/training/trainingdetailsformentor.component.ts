import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-trainingdetailsformentor',
  templateUrl: './trainingdetailsformentor.component.html',
  styleUrls: []
})
export class TrainingdetailsformentorComponent implements OnInit {
  training: Training[];
  id: string;
  constructor(private router: Router, private trainingService: TrainingService) {

  }

  ngOnInit() {
    this.id=sessionStorage.getItem("id");
    this.trainingService.getTrainingByMentorId()
      .subscribe( data => {
        this.training = data;
      });

  };

}
