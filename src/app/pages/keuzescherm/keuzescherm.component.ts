import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { AddTeam } from '../../store/actions/team.action';

@Component({
  selector: 'app-keuzescherm',
  templateUrl: './keuzescherm.component.html',
  styleUrls: ['./keuzescherm.component.scss'],
})
export class KeuzeschermComponent implements OnInit {
  choiceForm: FormGroup;
  hasBeenSubmitted: boolean;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.choiceForm = this.fb.group({
      team: ['', Validators.required],
    });
    this.hasBeenSubmitted = false;
  }

  onStart(): void {
    this.hasBeenSubmitted = true;
    if (this.choiceForm.valid) {
      this.store.dispatch(
        new AddTeam({ team: this.choiceForm.controls['team'].value })
      );
    }
    this.router.navigate(['/intro']);
  }
}
