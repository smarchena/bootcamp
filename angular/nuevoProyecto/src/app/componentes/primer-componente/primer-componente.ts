import { Component } from '@angular/core';

@Component({
  selector: 'PrimerComponente',
  standalone: true,
  imports: [],
  templateUrl: './primer-componente.html',
  styleUrl: './primer-componente.css',
})
export class PrimerComponente {

  ngOnInit(): void {
    //alert('Esto se ejecuta al inicio.') //se ejecuta al inicio del componente.
  }

  nombre = 'Santiago es el crack!';
  mostrarNombre(){
    alert(this.nombre)
  }
}
