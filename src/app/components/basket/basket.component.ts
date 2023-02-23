import { Component } from '@angular/core';
import { IProduct, PRODUCTS } from 'src/app/mocks/products';
import { BasketProduct, BasketService } from 'src/app/services/basket.service';



@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  basket: BasketProduct[] = []; 


  constructor(public basketService: BasketService) {};

  ngOnInit() {
    this.getbasket();
  }

  getbasket() {
    this.basket = this.basketService.getBasket();
  }
 removeProduct(index: number) {
  this.basketService.removeProduct(index);
  
  this.getbasket();
  
 }



}