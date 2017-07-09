import {Component, OnInit} from '@angular/core';
import { Service } from '../service';
import { Picture } from './picture-carousel';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './carousel-basic.html'
})
export class NgbdCarouselBasic implements OnInit{
    constructor (private service: Service){}
    pictures: Picture[];

    ngOnInit(): void{
        this.pictures = this.service.getPictures();
    }
}
