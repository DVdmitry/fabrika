import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Service } from './service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgbdModalBasic } from './modal-basic/modal-basic';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SiteLinkComponent } from './site-link/site-link.component';
import {NgbdCarouselBasic} from './carousel-basic/carousel-basic.component';
import {MainPageComponent } from './main-page/main-page.component';
import { VKComponent } from './vk/vk.component';
import { AboutComponent } from './about/about.component';
import { VideoComponent } from './video/video.component';
import { KursComponent } from './kurs/kurs.component';
import { DiplomComponent } from './diplom/diplom.component';
import { NgbdPopoverBasic } from './popover-basic/popover-basic';
import { PriceComponent } from './price/price.component';
import { NgbdTabsetBasic } from './tabset/tabset-basic';
import { NgbdAccordionConfig } from "./accordion/accordion-config";
import { ContactsComponent } from "./contacts/contacts.component";
import { MapComponent } from "./map-component/map.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NgbdCarouselBasic,
    SiteLinkComponent,
    MainPageComponent,
    VKComponent,
    AboutComponent,
    VideoComponent,
    KursComponent,
    NgbdModalBasic,
    DiplomComponent,
    NgbdPopoverBasic,
    PriceComponent,
    NgbdTabsetBasic,
    NgbdAccordionConfig,
    ContactsComponent,
    MapComponent
  ],
  imports: [
      RouterModule.forRoot([
    //   {
    //       path: 'main',
    //       component: MainPageComponent
    //   },
    //   {
    //       path: '',
    //       redirectTo: '/main',
    //       pathMatch: 'full'
    //   },
    //   {
    //        path: 'about',
    //        component: AboutComponent
    //    },
    //    {
    //        path: 'kurs',
    //        component: KursComponent
    //    },
    //    {
    //        path: 'diplom',
    //        component: DiplomComponent
    //    },
    //    {
    //        path: 'price',
    //        component: PriceComponent
    //    }
      ]),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCOao2VWJcrD55R4WYya5p1FVj4q4p4xA'
    }),
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [NgbCarouselConfig,  NgbAccordionConfig, Service],
  bootstrap: [AppComponent, MapComponent]
})
export class AppModule { }
export class MapModule { }
