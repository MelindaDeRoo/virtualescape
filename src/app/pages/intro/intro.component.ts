import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit, OnDestroy {
  introForm: FormGroup;

  team: string;
  hasBeenSubmitted: boolean;
  #subscriptions: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {
    this.hasBeenSubmitted = false;
  }

  ngOnInit(): void {
    const teams = this.store.select((state) => state.teams.teams);
    this.#subscriptions.add(
      teams.subscribe(
        (teams) => (this.team = teams[0] ? teams[0].team : '<placeholder>')
      )
    );

    this.introForm = this.fb.group({
      code1: ['', [Validators.required, validateCode1]],
    });
  }

  ngOnDestroy(): void {
    this.#subscriptions.unsubscribe();
  }

  onFocusChange(): void {
    this.hasBeenSubmitted = false;
  }

  onSubmit(): void {
    this.hasBeenSubmitted = true;
    if (this.introForm.valid) {
      this.router.navigate(['puzzel1']);
    }
  }
}

export function validateCode1(control: AbstractControl) {
  return control.value === 4761 ? null : { invalidCode: true };
}
