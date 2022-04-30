import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzel3Component } from './puzzel3.component';

describe('Puzzel3Component', () => {
  let component: Puzzel3Component;
  let fixture: ComponentFixture<Puzzel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzel3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
