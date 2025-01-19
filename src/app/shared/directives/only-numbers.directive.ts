import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyNumbers]'
})
export class OnlyNumbersDirective {
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    // Если нажата запятая или точка, отменяем действие
    if (event.key === ',' || event.key === '.') {
      event.preventDefault();
    }
  }

  @HostListener('input', ['$event'])
  onInput(event: KeyboardEvent): void {
    const element = event.target as HTMLInputElement;
    // Убираем все символы, которые не являются цифрами
    element.value = element.value.replace(/[^0-9]/g, '');
  }
}
