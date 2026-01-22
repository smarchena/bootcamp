import { Component } from '@angular/core';
import { VideoServ } from '../../services/video-serv'; //se importa el servicio 

@Component({
  selector: 'video-comp',
  standalone: true,
  imports: [],
  templateUrl: './video-comp.html',
  styleUrl: './video-comp.css',
})
export class VideoComp {

  constructor(private videoServ: VideoServ){}

  ngOnInit(): void{
    console.log(this.videoServ.obtenerVideos()) //consola del navegador.
  }
}
