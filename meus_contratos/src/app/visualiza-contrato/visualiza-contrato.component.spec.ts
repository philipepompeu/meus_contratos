import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaContratoComponent } from './visualiza-contrato.component';

describe('VisualizaContratoComponent', () => {
  let component: VisualizaContratoComponent;
  let fixture: ComponentFixture<VisualizaContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizaContratoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizaContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
