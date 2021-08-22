import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-keuzescherm',
  templateUrl: './keuzescherm.component.html',
  styleUrls: ['./keuzescherm.component.scss'],
})
export class KeuzeschermComponent implements OnInit {
  choiceForm: FormGroup;
  hasBeenSubmitted: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.choiceForm = this.fb.group({
      team: ['', Validators.required],
    });
    this.hasBeenSubmitted = false;
  }

  onStart(): void {
    this.hasBeenSubmitted = true;
    if (this.choiceForm.valid) {
      console.log('Valid');
    } else {
      console.log('Invalid');
    }
  }
}
