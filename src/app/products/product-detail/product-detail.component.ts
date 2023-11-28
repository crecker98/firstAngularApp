import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnChanges,
SimpleChanges } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges{

  @Input() product : Product | undefined;
  @Output() bought = new EventEmitter<string>();

  constructor() {
    console.log(`Name is ${this.product?.name} in the constructor`);
    console.log(`Price is ${this.product?.price} in the constructor`);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name'];
    if(!product.isFirstChange) {
      const oldValue = product.previousValue.name;
      const newValue = product.currentValue.name;
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
  }

  ngOnInit(): void {
    console.log(`Name is ${this.product?.name} in the ngOnInit`);
  }

  buy() {
    this.bought.emit(this.product?.name);
  }

  get productName(): string | undefined {
    console.log(`Get ${this.product?.name}`);
    return this.product?.name;
  }

}
