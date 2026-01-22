import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoComp } from './components/video-comp/video-comp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [    
    VideoComp
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
