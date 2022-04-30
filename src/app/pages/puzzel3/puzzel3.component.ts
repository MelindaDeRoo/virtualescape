import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puzzel3',
  templateUrl: './puzzel3.component.html',
  styleUrls: ['./puzzel3.component.scss'],
})
export class Puzzel3Component implements OnInit {
  hasBeenSubmitted: boolean;
  puzzelForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.hasBeenSubmitted = false;
  }

  ngOnInit(): void {
    this.puzzelForm = this.fb.group({
      code: ['', [Validators.required, validateCode]],
    });
  }

  onFocusChange(): void {
    this.hasBeenSubmitted = false;
  }

  onSubmit(): void {
    this.hasBeenSubmitted = true;
    if (this.puzzelForm.valid) {
      this.router.navigate(['credits']);
    }
  }
}

export function validateCode(): ValidatorFn {
  return (control: AbstractControl) => {
    return control.value === '7491' ? null : { invalidCode: true };
  };
}
