import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Skill } from '../models/skill.model';
import { SkillService } from './skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styles: []
})
export class SkillComponent implements OnInit {

  skill: Skill[];

  constructor(private router: Router, private skillService: SkillService) {

  }

  ngOnInit() {
    this.skillService.getSkill()
      .subscribe( data => {
        this.skill = data;
      });
  };

  deleteSkill(skill: Skill): void {
    this.skillService.deleteSkill(skill)
      .subscribe( data => {
        this.skill = this.skill.filter(u => u !== skill);
      })
  };

}


