import { Component } from '@angular/core';
import { IProduct} from 'src/app/mocks/products';
import { BasketProduct, BasketService } from 'src/app/services/basket.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})


export class CounterComponent {
count: number = 1;
//ajout
productP?:IProduct;
quantity: number = 1;



constructor(private productsService : ProductsService,
  //ajout
  private basketService : BasketService
  )
   { }

decrement() {
  if(this.count>0) {
    this.count--;
  }
}


increment() {
  this.count++;
}


addToBasket() {

  if(!this.productP) return;

  const basketProduct: BasketProduct = {
    product: this.productP,
    quantity: this.quantity

  }
  this.basketService.addToBasket(basketProduct);
}

}