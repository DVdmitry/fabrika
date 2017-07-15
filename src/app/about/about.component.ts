import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { PictureAbout } from '../about/about';
@Component ({
    selector: 'about',
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit{
    constructor(private service: Service){}
    picturesAbout: PictureAbout[];

    ngOnInit(): void {
        this.picturesAbout = this.service.getPicturesAbout();
    }
}
