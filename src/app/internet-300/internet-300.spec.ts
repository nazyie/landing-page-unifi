import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Internet300 } from './internet-300';

describe('Internet300', () => {
  let component: Internet300;
  let fixture: ComponentFixture<Internet300>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Internet300]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Internet300);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
