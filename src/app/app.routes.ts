import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'logic-puzzles',
  },
  {
    path: 'logic-puzzles',
    loadComponent: () =>
      import('./routes/logic-puzzles/logic-puzzles.component').then(
        (m) => m.LogicPuzzlesComponent
      ),
  },
  {
    path: 'programming-puzzles',
    loadComponent: () =>
      import('./routes/programming-puzzles/programming-puzzles.component').then(
        (m) => m.ProgrammingPuzzlesComponent
      ),
  },
];
