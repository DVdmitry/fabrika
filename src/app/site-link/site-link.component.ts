import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { SiteLink } from '../site-link/site-link';
@Component ({
    selector: 'site-links',
    templateUrl: './site-link.component.html'
})
export class SiteLinkComponent implements OnInit{
    constructor(private service: Service){}
    siteLinks:SiteLink[];

    ngOnInit(): void {
        this.siteLinks = this.service.getSiteLinks();
    }
}
