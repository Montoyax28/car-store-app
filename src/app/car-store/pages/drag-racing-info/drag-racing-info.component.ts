import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drag-racing-info',
  templateUrl: 'drag-racing-info.component.html',
  styleUrls: ['drag-racing-info.component.scss'],
})
export class DragRacingInfoComponent implements OnInit {
  videos: string[] = [];
  currentIndex = 0;
  currentVideo: SafeResourceUrl = '';

  videoCategories: { [key: string]: string[] } = {
    toyotaSupra: [
      'https://www.youtube.com/embed/thgNDespy1Q?autoplay=1&controls=0&rel=0',
      'https://www.youtube.com/embed/A7YMjWl77Ek?autoplay=1&controls=0&rel=0',
      'https://www.youtube.com/embed/HMEz0g8bA_A?autoplay=1&controls=0&rel=0',
    ],
    nissanSkyline: [
      'https://www.youtube.com/embed/SJPWkdduwEc?autoplay=1&controls=0&rel=0',
      'https://www.youtube.com/embed/QZb7Gra8hc4?autoplay=1&controls=0&rel=0',
      'https://www.youtube.com/embed/Lz6AAvsw-O4?autoplay=1&controls=0&rel=0',
    ],
    mitsubishiLancer: [
      'https://www.youtube.com/embed/_F94sD3IGG0?autoplay=1&controls=0',
      'https://www.youtube.com/embed/s_jsx_Mv6EA?autoplay=1&controls=0',
      'https://www.youtube.com/embed/8mIchwGyIO4?autoplay=1&controls=0',
    ],
  };

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      const category = params['category'];
      this.videos =
        this.videoCategories[category] || this.videoCategories['toyotaSupra']; // Si no hay, usa la primera
      this.currentIndex = 0;
      this.currentVideo = this.sanitizeUrl(this.videos[this.currentIndex]);
    });
  }

  nextVideo() {
    this.currentIndex = (this.currentIndex + 1) % this.videos.length;
    this.currentVideo = this.sanitizeUrl(this.videos[this.currentIndex]);
  }

  prevVideo() {
    this.currentIndex =
      (this.currentIndex - 1 + this.videos.length) % this.videos.length;
    this.currentVideo = this.sanitizeUrl(this.videos[this.currentIndex]);
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
