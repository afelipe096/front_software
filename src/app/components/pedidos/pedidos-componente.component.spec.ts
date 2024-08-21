import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosComponenteComponent } from './pedidos-componente.component';

describe('PedidosComponenteComponent', () => {
  let component: PedidosComponenteComponent;
  let fixture: ComponentFixture<PedidosComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidosComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
