import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MultiplicationTableService {

  getNumbers(num: number): Array<number> {
    return Array.from({ length: num }, (_, i) => i + 1);
  }
}
