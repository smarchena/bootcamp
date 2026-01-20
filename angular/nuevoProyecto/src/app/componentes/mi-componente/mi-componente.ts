import { Component } from '@angular/core';
import { MiServicio } from '../../servicios/mi-servicio';

@Component({
  selector: 'mi-componente',
  standalone: true,
  imports: [],
  templateUrl: './mi-componente.html',
  styleUrl: './mi-componente.css',  
})
export class MiComponente {

  constructor(private tareaServicio: MiServicio) {}
  ngOnInit(): void {
    console.log(this.tareaServicio.ObtenerTareas()) //llamo desde mi componente al servicio.
  }

}
