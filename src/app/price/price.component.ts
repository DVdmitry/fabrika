import { Component, OnInit } from '@angular/core';
import { Price } from './price';
import { Service } from '../service';
import { NgbdTabsetBasic } from '../tabset/tabset-basic';
@Component({
    selector: 'price',
    templateUrl: './price.component.html'
})
export class PriceComponent implements OnInit{
    constructor (private service: Service){}
    price : Price[];

    ngOnInit(): void {
        this.price = this.service.getPrice();
    }
}
