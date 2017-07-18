import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { MainLink } from '../main-link/main-link';
import { NgbdPopoverBasic } from '../popover-basic/popover-basic';
import { KursComponent } from '../kurs/kurs.component';

@Component({
    selector: 'header',
    templateUrl: './header.component.html'

})
export class HeaderComponent implements OnInit{
    constructor (private service: Service){}
    myLinks: MainLink[];
    selectedLink: MainLink;

    ngOnInit (): void{
        this.myLinks = this.service.getLinkInfo();
    }

    onSelect(myLink: MainLink): void{
        this.selectedLink = myLink;
    }
}
