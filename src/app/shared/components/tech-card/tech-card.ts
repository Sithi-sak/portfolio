import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-tech-card',
  imports: [],
  templateUrl: './tech-card.html',
  styleUrl: './tech-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechCard {
  skill = input.required<Skill>();
}
