import { Injectable } from '@angular/core';
import * as socialMediaWebsitesJson from 'src/assets/json/social-media-websites.json';
import * as socialProfilesJson from 'src/assets/json/social-profiles.json';
import { SocialMediaWebsite } from '../../interfaces/SocialMediaWebsite';
import { SocialProfile } from '../../interfaces/SocialProfile';
import { EntityRepopulationService } from '../../../common-services/entity-repopulation.service';

@Injectable({
  providedIn: 'root'
})
export class SocialProfilesService implements EntityRepopulationService {
  socialMediaWebsites: SocialMediaWebsite[];
  private socialProfiles: SocialProfile[];

  constructor() {
    this.socialMediaWebsites = (socialMediaWebsitesJson as any).default as SocialMediaWebsite[];
    this.socialProfiles = (socialProfilesJson as any).default as SocialProfile[];
    this.socialProfiles.forEach(a => this.repopulate(a));
  }

  repopulate(a: SocialProfile): void {
    let matchingSocialMedia = this.socialMediaWebsites.find(b => b.id === a.id);
    if (matchingSocialMedia) {
      a.iconClass = matchingSocialMedia.iconClass;
      a.url = matchingSocialMedia.url + a.userId;
    }
  }

  getSocialMediaProfiles(): SocialProfile[] {
    return this.socialProfiles;
  }

}
