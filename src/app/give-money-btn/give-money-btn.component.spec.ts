import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveMoneyBtnComponent } from './give-money-btn.component';

describe('GiveMoneyBtnComponent', () => {
  let component: GiveMoneyBtnComponent;
  let fixture: ComponentFixture<GiveMoneyBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveMoneyBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveMoneyBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
