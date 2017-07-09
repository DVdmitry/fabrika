import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Service } from './service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { MainLinkComponent } from './main-link/main-link.component';
import { SiteLinkComponent } from './site-link/site-link.component';
import {NgbdCarouselBasic} from './carousel-basic/carousel-basic.component';
import {MainPageComponent } from './main-page/main-page.component';
import { VKComponent } from './vk/vk.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // MainLinkComponent,
    NgbdCarouselBasic,
    SiteLinkComponent,
    MainPageComponent,
    VKComponent

  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NgbCarouselConfig, Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
