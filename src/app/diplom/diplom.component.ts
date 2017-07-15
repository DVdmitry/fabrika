import { Component, OnInit } from '@angular/core';
import { Diplom } from './diplom';
import { Service } from '../service';
@Component({
    selector: 'diplom',
    templateUrl: './diplom.component.html'
})
export class DiplomComponent implements OnInit{
    constructor (private service: Service){}
    diplom : Diplom[];
    diplomStruct: Diplom[];

    ngOnInit(): void {
        this.diplom = this.service.getDiplom();
        this.diplomStruct = this.service.getDiplomStruct();
    }


}
