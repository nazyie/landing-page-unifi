import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Internet100 } from './internet-100';

describe('Internet100', () => {
  let component: Internet100;
  let fixture: ComponentFixture<Internet100>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Internet100]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Internet100);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
