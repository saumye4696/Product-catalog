import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenovoDataComponent } from './lenovo-data.component';

describe('LenovoDataComponent', () => {
  let component: LenovoDataComponent;
  let fixture: ComponentFixture<LenovoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenovoDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LenovoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
