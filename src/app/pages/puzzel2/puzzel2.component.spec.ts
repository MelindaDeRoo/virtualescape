import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzel2Component } from './puzzel2.component';

describe('Puzzel2Component', () => {
  let component: Puzzel2Component;
  let fixture: ComponentFixture<Puzzel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
