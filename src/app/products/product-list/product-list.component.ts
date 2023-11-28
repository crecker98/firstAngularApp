import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
  selectedProduct : Product | undefined;
  products :Product[ ]= [
    {
      name: `Webcam`,
      price: 100
    },
    {
      name: `Microphone`,
      price: 200
    },
    {
      name: `Wirless keyboard`,
      price: 85
    },
  ];

  ngAfterViewInit(): void {
    if(this.productDetail) {
      console.log(this.productDetail.product);
    }
  }
  
  onBuy(name: string) {
    window.alert(`You just bought ${name}!`);
  }

  trackByProducts(index: number, product: Product): string {
    return product.name;
  }

}
