import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  gitHubLink = 'https://github.com/Corshan/chaos-chef';
  demoVideoCode = 'jZs_wKkvGM8';
  iframeVideoLink = `https://www.youtube.com/embed/${this.demoVideoCode}`
  buttonVideoLink = `https://www.youtube.com/watch/${this.demoVideoCode}`
  posterLink = 'assets/FYP_poster_final_version.pdf';
  urlSafe: SafeResourceUrl | undefined = undefined;

  constructor(public sanitizer: DomSanitizer) { }


  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeVideoLink);
  }
}
