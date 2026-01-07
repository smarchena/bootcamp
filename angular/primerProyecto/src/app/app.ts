import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiComponente } from './mi-componente/mi-componente';
import { ComponenteEjemplo } from './subcarpeta/componente-ejemplo/componente-ejemplo';
import { ComponenteEjemplo2 } from './subcarpeta/componente-ejemplo2/componente-ejemplo2';
import { ComponenteEjemplo3 } from './subcarpeta/componente-ejemplo3/componente-ejemplo3';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MiComponente,
    ComponenteEjemplo,
    ComponenteEjemplo2,
    ComponenteEjemplo3
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primerProyecto');
}
