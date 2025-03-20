import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarStoreComponent } from './car-store.component';

describe('CarStoreComponent', () => {
  let component: CarStoreComponent;
  let fixture: ComponentFixture<CarStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
