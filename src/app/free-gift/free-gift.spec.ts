import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeGift } from './free-gift';

describe('FreeGift', () => {
  let component: FreeGift;
  let fixture: ComponentFixture<FreeGift>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeGift]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeGift);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
