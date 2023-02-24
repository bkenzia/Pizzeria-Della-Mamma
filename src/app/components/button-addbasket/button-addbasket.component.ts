import { Component } from '@angular/core';
import { BasketProduct, BasketService } from 'src/app/services/basket.service';
import { CounterComponent } from 'src/app/components/counter/counter.component';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct, PRODUCTS } from 'src/app/mocks/products';


@Component({
  selector: 'app-button-addbasket',
  templateUrl: './button-addbasket.component.html',
  styleUrls: ['./button-addbasket.component.css']
})
export class ButtonAddbasketComponent {

  count: number = 1;
  productP?:IProduct;
  quantity: number = 1;



  constructor(private productsService : ProductsService, private basketService : BasketService) { }

  
  
  addToBasket() {
  
    if(!this.productP) return;
  
    const basketProduct: BasketProduct = {
      product: this.productP,
      quantity: this.quantity
  
    }
    this.basketService.addToBasket(basketProduct);
  }
  
  }

