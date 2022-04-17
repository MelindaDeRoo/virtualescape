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
      part1: ['', [Validators.required, validateCoordinatePart(52)]],
      part2: ['', [Validators.required, validateCoordinatePart(32)]],
      part3: ['', [Validators.required, validateCoordinatePart(59)]],
      part4: ['', [Validators.required, validateCoordinatePart(5)]],
      part5: ['', [Validators.required, validateCoordinatePart(6)]],
      part6: ['', [Validators.required, validateCoordinatePart(33)]],
      part7: ['', [Validators.required, validateCoordinatePart(36)]],
      part8: ['', [Validators.required, validateCoordinatePart(6)]],
    });
  }

  onFocusChange(): void {
    this.hasBeenSubmitted = false;
  }

  onSubmit(): void {
    this.hasBeenSubmitted = true;
    if (this.puzzelForm.valid) {
      console.log('Code correct');
    }
  }
}

//52°32'59.5"N 6°33'36.6"E
export function validateCoordinatePart(part: number): ValidatorFn {
  return (control: AbstractControl) => {
    return parseInt(control.value) === part ? null : { invalidCode: true };
  };
}
