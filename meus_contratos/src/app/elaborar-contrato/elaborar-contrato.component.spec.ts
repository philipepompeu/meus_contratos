import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElaborarContratoComponent } from './elaborar-contrato.component';

describe('ElaborarContratoComponent', () => {
  let component: ElaborarContratoComponent;
  let fixture: ComponentFixture<ElaborarContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElaborarContratoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElaborarContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
