import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
} from '@angular/material/card';
import { MatFormField, MatSuffix } from '@angular/material/form-field';
import { MatInput, MatLabel } from '@angular/material/input';
import { MatIconButton, MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import {
  CdkVirtualScrollViewport,
  CdkVirtualForOf,
  CdkFixedSizeVirtualScroll,
} from '@angular/cdk/scrolling';
import { MultiplicationTableService } from '@shared/services/multiplication-table.service';
import { OnlyNumbersDirective } from '@shared/directives/only-numbers.directive';

@Component({
  selector: 'app-multiplication-table',
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
    MatTooltip,
    MatIcon,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    OnlyNumbersDirective,
  ],
  templateUrl: './multiplication-table.component.html',
  styleUrl: './multiplication-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiplicationTableComponent {
  fb = inject(FormBuilder);

  multiplicationTableService = inject(MultiplicationTableService);

  multiplicationForm: FormGroup = this.fb.group({});

  multiplicationTable: number[] = [];

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.multiplicationForm = this.fb.group({
      number: this.fb.control(''),
    });
  }

  clear(): void {
    this.multiplicationForm.get('number')?.reset('');
    this.multiplicationTable = [];
  }

  generateTable(): void {
    const number = this.multiplicationForm.value.number;
    this.multiplicationTable =
      this.multiplicationTableService.getNumbers(number);
  }
}
