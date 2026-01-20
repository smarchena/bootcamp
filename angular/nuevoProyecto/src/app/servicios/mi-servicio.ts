import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MiServicio {

  URL_API = 'http://localhost:3000'

  ObtenerTareas() {
    return []
  }  
}
