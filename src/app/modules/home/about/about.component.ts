import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PromotionalVideo } from '../models/PromotionalVideo';
import { PromotionalVideoService } from '../services/promotional-video.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  videos: PromotionalVideo[] = [];

  constructor(private videoService: PromotionalVideoService, private sanitizer: DomSanitizer) {
    this.videos = this.videoService.getActiveVideos();
    this.videos.forEach(a=> {
      a.FullUrl = this.sanitizer.bypassSecurityTrustResourceUrl(a.FullUrl);
    });
  }

  ngOnInit() {
  }

}