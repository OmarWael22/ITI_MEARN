import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComp } from './second-comp';

describe('SecondComp', () => {
  let component: SecondComp;
  let fixture: ComponentFixture<SecondComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
