import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoritiesComponent } from './autorities.component';

describe('AutoritiesComponent', () => {
  let component: AutoritiesComponent;
  let fixture: ComponentFixture<AutoritiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoritiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
