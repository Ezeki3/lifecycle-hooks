import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price:number = 0;
  public interval$?: Subscription;
  
  constructor() { }

  ngOnInit(): void {
    console.log('onInit');
    this.interval$ = interval(1000).subscribe( value => console.log(`TICK:  ${value}`));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges');
    console.log({changes});
    
  }
  
  ngOnDestroy(): void {
    console.log('Componente hijo: ngOnDestroy');
    this.interval$?.unsubscribe();
  }

}
