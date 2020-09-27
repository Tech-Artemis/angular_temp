import { Injectable } from '@angular/core';
import { AppConfig } from '../interfaces/AppConfig';
import * as appConfig from 'src/assets/json/app-config.json';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  appConfig: AppConfig;

  constructor() {
    this.appConfig = (appConfig as any).default as AppConfig;
  }

  getReleaseInformation() {
    return this.appConfig.version;
  }

  get IsCartEnabled() {
    return this.appConfig.isCartEnabled;
  }
}