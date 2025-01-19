import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeclensionService {

  getDeclensionComputers(count: number): string {
    const mod10 = count % 10;
    const mod100 = count % 100;

    const computerDeclensions = ['компьютер', 'компьютера', 'компьютеров'];
    const computerDeclensionIndex =
      mod100 >= 11 && mod100 <= 19 ? 2
      : mod10 === 1 ? 0
      : mod10 >= 2 && mod10 <= 4 ? 1
      : 2;
    return `${count} ${computerDeclensions[computerDeclensionIndex]}`;
  }
}
