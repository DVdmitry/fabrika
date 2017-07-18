import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Service } from './service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgbdModalBasic } from './modal-basic/modal-basic';


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
    NgbdTabsetBasic
  ],
  imports: [
      RouterModule.forRoot([
     {
          path: 'main',
          component: MainPageComponent
      },
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
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NgbCarouselConfig, Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
