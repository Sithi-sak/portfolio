import { Component, signal } from '@angular/core';
import { Skill } from '../../shared/models/skill.model';
import { TechCard } from '../../shared/components/tech-card/tech-card';

@Component({
  selector: 'app-skills',
  imports: [TechCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly techStack = signal<Skill[]>([
    {
      name: 'HTML',
      icon: 'assets/icons/html5.svg',
      level: 'Advanced',
    },
    {
      name: 'CSS',
      icon: 'assets/icons/css.svg',
      level: 'Advanced',
    },
    {
      name: 'Javascript',
      icon: 'assets/icons/javascript.svg',
      level: 'Intermediate',
    },
    {
      name: 'Angular',
      icon: 'assets/icons/angular.svg',
      level: 'Beginner/Learning',
    },
    {
      name: 'Typescript',
      icon: 'assets/icons/typescript.svg',
      level: 'Intermediate',
    },
    {
      name: 'Tailwind CSS',
      icon: 'assets/icons/tailwindcss.svg',
      level: 'Intermediate',
    },
    {
      name: 'shadcn/ui',
      icon: 'assets/icons/shadcnui.svg',
      level: 'Beginner',
    },
    {
      name: 'Node.js',
      icon: 'assets/icons/nodedotjs.svg',
      level: 'Beginner',
    },
    {
      name: 'SQLite',
      icon: 'assets/icons/sqlite.svg',
      level: 'Intermediate',
    },
    {
      name: 'PostgreSQL',
      icon: 'assets/icons/postgresql.svg',
      level: 'Intermediate',
    },
    {
      name: 'Git',
      icon: 'assets/icons/git.svg',
      level: 'Intermediate',
    },
    {
      name: 'Supabase',
      icon: 'assets/icons/supabase.svg',
      level: 'Beginner',
    },
    {
      name: 'Linux',
      icon: 'assets/icons/linux.svg',
      level: 'Advanced',
    },
  ]);
}
