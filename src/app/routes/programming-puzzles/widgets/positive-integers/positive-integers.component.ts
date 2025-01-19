import { Component, inject, OnInit } from '@angular/core';
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
import { PositiveIntegersService } from '@shared/services/positive-integers.service';
import { OnlyNumbersDirective } from '@shared/directives/only-numbers.directive';

@Component({
  selector: 'app-positive-integers',
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
  templateUrl: './positive-integers.component.html',
  styleUrl: './positive-integers.component.scss',
})
export class PositiveIntegersComponent implements OnInit {
  fb = inject(FormBuilder);

  positiveIntegersService = inject(PositiveIntegersService);

  commonDivisorForm: FormGroup = this.fb.group({});

  result: number[] = [];

  commonDivisors: number[] = [];

  msg: string = '';

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.commonDivisorForm = this.fb.group({
      number: this.fb.control(''),
    });
  }

  clear(): void {
    this.commonDivisorForm.get('number')?.reset('');
    this.commonDivisors = [];
    this.result = [];
    this.msg = '';
  }

  addNumber(): void {
    const number = this.commonDivisorForm.value.number;
    this.result.push(number);
    this.commonDivisorForm.reset();
  }


  findCommonDivisors(): void {
    if (this.result.length > 0) {
      const eaValue = this.positiveIntegersService.findEuclideanAlgorithm(this.result);
      this.commonDivisors = this.positiveIntegersService.findDivisors(eaValue);
      if (this.commonDivisors.length == 0) {
        this.msg = 'Для заданного массива нет общих делителей.'
      }
    }
  }
}