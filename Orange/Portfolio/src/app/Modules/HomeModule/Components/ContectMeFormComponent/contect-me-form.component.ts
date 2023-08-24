import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-contect-me-form',
  templateUrl: './contect-me-form.component.html',
  styleUrls: ['./contect-me-form.component.css']
})
export class ContectMeFormComponent {
  ContectMeForm!: UntypedFormGroup;

  SubmitContectMeForm(): void {
    if (this.ContectMeForm.valid) {
      console.log('submit', this.ContectMeForm.value);
    } else {
      Object.values(this.ContectMeForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.ContectMeForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      message: [null, [Validators.required]]
    });
  }
}
