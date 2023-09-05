import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackClasesComponent } from './hack-clases.component';

describe('HackClasesComponent', () => {
  let component: HackClasesComponent;
  let fixture: ComponentFixture<HackClasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HackClasesComponent]
    });
    fixture = TestBed.createComponent(HackClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
