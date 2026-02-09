import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'skills',
    loadComponent: () => import('./features/skills/skills').then((m) => m.Skills),
  },
  {
    path: 'experience',
    loadComponent: () => import('./features/experience/experience').then((m) => m.Experience),
  },
  {
    path: 'education',
    loadComponent: () => import('./features/education/education').then((m) => m.Education),
  },
];
