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
  selector: 'app-puzzel2',
  templateUrl: './puzzel2.component.html',
  styleUrls: ['./puzzel2.component.scss'],
})
export class Puzzel2Component implements OnInit {
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
      this.router.navigate(['puzzel3']);
    }
  }
}

//52°32'59.5"N 6°33'36.6"E
export function validateCode(control: AbstractControl) {
  return control.value === 3672 ? null : { invalidCode: true };
}
