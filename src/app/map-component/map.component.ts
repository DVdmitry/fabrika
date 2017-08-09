
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map',
  styles: [`
    agm-map {
      height: 100%;
    }
  `],
  templateUrl:"./map.component.html"
})
export class MapComponent {
  lat: number = 53.9181088;
  lng: number = 27.4643773;
}
