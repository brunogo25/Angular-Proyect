import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackClassManagerComponent } from './hack-class-manager.component';

describe('HackClassManagerComponent', () => {
  let component: HackClassManagerComponent;
  let fixture: ComponentFixture<HackClassManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HackClassManagerComponent]
    });
    fixture = TestBed.createComponent(HackClassManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
