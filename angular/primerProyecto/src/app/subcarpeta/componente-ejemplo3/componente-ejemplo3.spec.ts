import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteEjemplo3 } from './componente-ejemplo3';

describe('ComponenteEjemplo3', () => {
  let component: ComponenteEjemplo3;
  let fixture: ComponentFixture<ComponenteEjemplo3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteEjemplo3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteEjemplo3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
