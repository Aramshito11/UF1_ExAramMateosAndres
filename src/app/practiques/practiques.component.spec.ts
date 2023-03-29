import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiquesComponent } from './practiques.component';

describe('PractiquesComponent', () => {
  let component: PractiquesComponent;
  let fixture: ComponentFixture<PractiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PractiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
