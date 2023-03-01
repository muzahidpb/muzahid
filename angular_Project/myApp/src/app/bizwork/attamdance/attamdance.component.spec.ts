import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttamdanceComponent } from './attamdance.component';

describe('AttamdanceComponent', () => {
  let component: AttamdanceComponent;
  let fixture: ComponentFixture<AttamdanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttamdanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttamdanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
