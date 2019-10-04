import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Technology } from '../models/technology.model';
import { TechnologyService } from './technology.service';

@Component({
  templateUrl: './add-technology.component.html'
})
export class AddTechnologyComponent {

  technology: Technology = new Technology();

  constructor(private router: Router, private technologyService: TechnologyService) {

  }

  createTechnology(): void {
    this.technologyService.createTechnology(this.technology)
        .subscribe( data => {
          alert("Technology Name entered successfully");
        });

  };

}
