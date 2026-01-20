import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimerComponente } from './componentes/primer-componente/primer-componente';
import { MiComponente } from './componentes/mi-componente/mi-componente';

@Component({
  selector: 'app-root',
  imports: [
    PrimerComponente,
    MiComponente
  ],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nuevoProyecto');
}
