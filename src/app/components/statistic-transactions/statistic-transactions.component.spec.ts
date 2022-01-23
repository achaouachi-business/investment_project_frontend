import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticTransactionsComponent } from './statistic-transactions.component';

describe('StatisticTransactionsComponent', () => {
  let component: StatisticTransactionsComponent;
  let fixture: ComponentFixture<StatisticTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
