import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteEjemplo2 } from './componente-ejemplo2';

describe('ComponenteEjemplo2', () => {
  let component: ComponenteEjemplo2;
  let fixture: ComponentFixture<ComponenteEjemplo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteEjemplo2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteEjemplo2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
