import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteEjemplo } from './componente-ejemplo';

describe('ComponenteEjemplo', () => {
  let component: ComponenteEjemplo;
  let fixture: ComponentFixture<ComponenteEjemplo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteEjemplo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteEjemplo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
