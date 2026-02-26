import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  isMuted = true;
  hoveredCard: 'user' | 'business' | null = null;

  toggleSound() {
    const video = this.videoPlayer.nativeElement;
    video.muted = !video.muted;
    this.isMuted = video.muted;
  }
}