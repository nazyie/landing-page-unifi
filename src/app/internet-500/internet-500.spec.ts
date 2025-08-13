import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Internet500 } from './internet-500';

describe('Internet500', () => {
  let component: Internet500;
  let fixture: ComponentFixture<Internet500>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Internet500]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Internet500);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
