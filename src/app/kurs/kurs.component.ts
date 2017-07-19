import { Component, OnInit } from '@angular/core';
import { Kurs } from './kurs';
import { Service } from '../service';
import { NgbdTabsetBasic } from '../tabset/tabset-basic';

@Component({
    selector: 'kurs',
    templateUrl: './kurs.component.html'

})
export class KursComponent implements OnInit{
    constructor (private service: Service){}
    kurs : Kurs[];
    kursStruct: Kurs[];
    kursAdvice: Kurs[];


    ngOnInit(): void {
        this.kurs = this.service.getKurs();
        this.kursStruct = this.service.getKursStruct();
        this.kursAdvice = this.service.getKursAdvice();
    }


}
