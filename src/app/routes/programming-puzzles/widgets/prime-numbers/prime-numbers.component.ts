import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
} from '@angular/material/card';
import { MatFormField, MatSuffix } from '@angular/material/form-field';
import { MatInput, MatLabel } from '@angular/material/input';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { PrimeNumbersService } from '@shared/services/prime-numbers.service';
import { OnlyNumbersDirective } from '@shared/directives/only-numbers.directive';

@Component({
  selector: 'app-prime-numbers',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatFormField,
    MatSuffix,
    MatInput,
    MatLabel,
    MatIconButton,
    MatButton,
    MatTooltip,
    MatIcon,
    ReactiveFormsModule,
    FlexLayoutModule,
    OnlyNumbersDirective,
  ],
  templateUrl: './prime-numbers.component.html',
  styleUrl: './prime-numbers.component.scss'
})
export class PrimeNumbersComponent {

    fb = inject(FormBuilder);

    primeNumbersService = inject(PrimeNumbersService);
  
    numberForm: FormGroup = this.fb.group({});

    primes: number[] = [];

    msg: string = '';

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.numberForm = this.fb.group({
      startNumber: this.fb.control(''),
      endNumber: this.fb.control(''),
    });
  }

  clear(): void {
    this.numberForm.get('startNumber')?.reset('');
    this.numberForm.get('endNumber')?.reset('');
    this.primes = [];
    this.msg = '';
  }

  onSubmit() {
    if (this.numberForm.valid) {
      const { startNumber, endNumber } = this.numberForm.value;
      this.primes = this.primeNumbersService.getPrimesInRange(startNumber, endNumber);

      if(this.primes.length === 0) {
        this.msg = 'Простых чисел в этом диапазоне нет.'
      }

      if (startNumber > endNumber) {
        this.msg = 'Ошибка!'
      }
    }
  }

}
