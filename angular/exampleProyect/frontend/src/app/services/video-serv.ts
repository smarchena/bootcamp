import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoServ {

  URL_API = 'http://localhost:3000'

  obtenerVideos() { //creamos una método (función) 'obtenerVideos' para que realice una petición al servidor y se conecta con el componente.
    return 'Hola!'
  }
}
