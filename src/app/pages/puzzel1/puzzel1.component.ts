import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puzzel1',
  templateUrl: './puzzel1.component.html',
  styleUrls: ['./puzzel1.component.scss'],
})
export class Puzzel1Component implements OnInit {
  puzzelForm: FormGroup;
  hasBeenSubmitted: boolean;

  constructor(private fb: FormBuilder, private router: Router) {
    this.hasBeenSubmitted = false;
  }

  ngOnInit(): void {
    this.puzzelForm = this.fb.group({
      code1: ['', [Validators.required, validateCode1]],
    });
  }

  onFocusChange(): void {
    this.hasBeenSubmitted = false;
  }

  onSubmit(): void {
    //FONT: SAM HANDWRITING OP DAFONT
    this.hasBeenSubmitted = true;
    if (this.puzzelForm.valid) {
      this.router.navigate(['puzzel2'])
    }
  }
}

export function validateCode1(control: AbstractControl) {
  return control.value === 1337 ? null : { invalidCode: true };
}
