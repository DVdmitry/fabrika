import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { MainLink } from '../main-link/main-link';

@Component({
    selector: 'header',
    templateUrl: './header.component.html'

})
export class HeaderComponent implements OnInit{
    constructor (private service: Service){}
    myLinks: MainLink[];

    ngOnInit (): void{
        this.myLinks = this.service.getLinkInfo();
    }
}
