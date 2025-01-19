import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
} from '@angular/material/card';
import { MatFormField, MatSuffix } from '@angular/material/form-field';
import { MatInput, MatLabel } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconButton, MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';
import { DeclensionService } from '@shared/services/declension.service';
import { OnlyNumbersDirective } from '@shared/directives/only-numbers.directive';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-decline-computers',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatFormField,
    MatLabel,
    MatInput,
    MatSuffix,
    MatIconButton,
    MatButton,
    ReactiveFormsModule,
    MatIcon,
    MatTooltip,
    OnlyNumbersDirective,
    FlexLayoutModule,
  ],
  templateUrl: './decline-computers.component.html',
  styleUrl: './decline-computers.component.scss',
})
export class DeclineComputersComponent implements OnInit {
  fb = inject(FormBuilder);

  declensionService = inject(DeclensionService);

  declensionForm: FormGroup = this.fb.group({});

  declensionResult: string = '';

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.declensionForm = this.fb.group({
      count: this.fb.control('', Validators.required),
    });
  }

  clear(): void {
    this.declensionForm.get('count')?.reset('');
    this.declensionResult = '';
  }

  getDeclension(): string {
    if (this.declensionForm.valid) {
      const count = this.declensionForm.value.count;
      return (this.declensionResult =
        this.declensionService.getDeclensionComputers(count));
    }

    return this.declensionResult = '';
  }
}
