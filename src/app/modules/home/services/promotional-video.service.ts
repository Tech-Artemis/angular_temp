import { Injectable } from '@angular/core';

//Custom Services
import { EntityRepopulation } from '../../shared/common-interfaces/interfaces/entity-repopulation.interface';
import { SocialMediaService } from '../../shared/social-media/services/social-media/social-media.service';

//Custom Models
import { SocialMediaWebsite } from '../../shared/social-media/interfaces/SocialMediaWebsite';
import { PromotionalVideo } from '../models/PromotionalVideo';

//Importing JSON data
import * as promotionalVideosJson from 'src/assets/json/promotional-videos.json';

@Injectable({
  providedIn: 'root'
})
export class PromotionalVideoService implements EntityRepopulation {
  private websites: SocialMediaWebsite[];
  private videos: PromotionalVideo[];

  constructor(private socialMediaService: SocialMediaService) {
    this.videos = (promotionalVideosJson as any).default as PromotionalVideo[];
    this.websites = this.socialMediaService.getSocialMediaWebsites();
    this.videos.forEach(a => this.repopulate(a));
  }

  repopulate(video: PromotionalVideo): void {
    let website = this.websites.find(b => b.id === video.SocialMediaWebsiteId);
    video.FullUrl = website.url + website.embeddingUrl.replace(website.videoIdPlaceholder, video.VideoId);
  }

  getActiveVideos() {
    return this.videos.filter(a=> a.CanShow);
  }
}
