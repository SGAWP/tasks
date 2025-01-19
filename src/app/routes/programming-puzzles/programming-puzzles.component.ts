import { Component } from '@angular/core';
import {
  DeclineComputersComponent,
  MultiplicationTableComponent,
  PositiveIntegersComponent,
  PrimeNumbersComponent,
} from './widgets';

@Component({
  selector: 'app-programming-puzzles',
  imports: [
    MultiplicationTableComponent,
    DeclineComputersComponent,
    PositiveIntegersComponent,
    PrimeNumbersComponent,
  ],
  templateUrl: './programming-puzzles.component.html',
  styleUrl: './programming-puzzles.component.scss',
})
export class ProgrammingPuzzlesComponent {}
