import { Injectable } from '@angular/core';
import * as socialMediaContainerJson from 'src/assets/json/social-media-container.json';
import * as socialProfilesJson from 'src/assets/json/social-profiles.json';
import { SocialMediaWebsite } from '../../interfaces/SocialMediaWebsite';
import { SocialProfile } from '../../interfaces/SocialProfile';
import { SocialMediaContainer } from '../../interfaces/SocialMediaContainer';
import { EntityRepopulation } from '../../../common-interfaces/interfaces/entity-repopulation.interface';

@Injectable({
  providedIn: 'root'
})
export class SocialProfilesService implements EntityRepopulation {
  socialMediaContainer: SocialMediaContainer;
  private socialProfiles: SocialProfile[];

  constructor() {
    this.socialMediaContainer = (socialMediaContainerJson as any).default as SocialMediaContainer;
    this.socialProfiles = (socialProfilesJson as any).default as SocialProfile[];
    this.socialProfiles.forEach(a => this.repopulate(a));
  }

  repopulate(a: SocialProfile): void {
    let matchingSocialMedia = this.socialMediaContainer.websites.find(b => b.id === a.id);
    if (matchingSocialMedia) {
      a.iconClass = matchingSocialMedia.iconClass;
      a.url = matchingSocialMedia.url + a.userId;
      a.svgIconId = matchingSocialMedia.svgIconId;
      a.hasIconImage = !!matchingSocialMedia.iconImageName;
      a.iconImageName = this.socialMediaContainer.imagePath + matchingSocialMedia.iconImageName;
    }
  }

  getSocialMediaProfiles(): SocialProfile[] {
    return this.socialProfiles;
  }

}
