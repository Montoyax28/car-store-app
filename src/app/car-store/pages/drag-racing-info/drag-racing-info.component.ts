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
      'https://www.youtube.com/embed/2iaun9R7U3A?autoplay=1&controls=0&rel=0',
      'https://www.youtube.com/embed/VIDEO_ID_2?autoplay=1&mute=1&controls=0&rel=0',
      'https://www.youtube.com/embed/VIDEO_ID_3?autoplay=1&mute=1&controls=0&rel=0',
    ],
    nissanSkyline: [
      'https://www.youtube.com/embed/VIDEO_ID_4?autoplay=1&mute=1&controls=0&rel=0',
      'https://www.youtube.com/embed/VIDEO_ID_5?autoplay=1&mute=1&controls=0&rel=0',
      'https://www.youtube.com/embed/VIDEO_ID_6?autoplay=1&mute=1&controls=0&rel=0',
    ],
    mitsubishiLancer: [
      'https://www.youtube.com/embed/VIDEO_ID_7?autoplay=1&mute=1&controls=0',
      'https://www.youtube.com/embed/VIDEO_ID_8?autoplay=1&mute=1&controls=0',
      'https://www.youtube.com/embed/VIDEO_ID_9?autoplay=1&mute=1&controls=0',
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
