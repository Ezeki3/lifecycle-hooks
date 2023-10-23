import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price:number =0;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.price)
    console.log('onInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges');
    console.log({changes});
    
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    
  }

}
