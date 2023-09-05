import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackClaseComponent } from './hack-clase.component';

describe('HackClaseComponent', () => {
  let component: HackClaseComponent;
  let fixture: ComponentFixture<HackClaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HackClaseComponent]
    });
    fixture = TestBed.createComponent(HackClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
