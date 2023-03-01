import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApieditComponent } from './apiedit.component';

describe('ApieditComponent', () => {
  let component: ApieditComponent;
  let fixture: ComponentFixture<ApieditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApieditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApieditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
