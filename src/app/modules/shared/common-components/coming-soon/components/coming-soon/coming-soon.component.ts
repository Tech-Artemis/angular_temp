import { Component, OnInit } from '@angular/core';
import { SocialProfile } from 'src/app/modules/shared/social-media/interfaces/SocialProfile';
import { SocialProfilesService } from 'src/app/modules/shared/social-media/services/social-profile/social-profiles.service';

@Component({
  selector: 'coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {
  socialProfiles: SocialProfile[];

  constructor(private socialProfilesService: SocialProfilesService) { }

  ngOnInit(): void {
    this.socialProfiles = this.socialProfilesService.getSocialMediaProfiles();
  }

}
