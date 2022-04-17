import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzzel1Component } from './puzzel1.component';

describe('Puzzel1Component', () => {
  let component: Puzzel1Component;
  let fixture: ComponentFixture<Puzzel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puzzel1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puzzel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
