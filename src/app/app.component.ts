import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  gitHubLink = 'https://github.com/Corshan/chaos-chef';
  demoVideoCode = '9zo-Qbt7ZFg';
  iframeVideoLink = `https://www.youtube.com/embed/${this.demoVideoCode}`
  buttonVideoLink = `https://www.youtube.com/watch/${this.demoVideoCode}`
  posterLink = ''; 
  urlSafe: SafeResourceUrl | undefined = undefined;

  constructor(public sanitizer: DomSanitizer) {}


  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeVideoLink);
  }
}
