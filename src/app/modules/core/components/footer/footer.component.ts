import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../../services/release.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  version : string;

  constructor(private releaseService: ReleaseService) { }

  ngOnInit() {
    this.version = this.releaseService.getReleaseInformation();
  }

}
