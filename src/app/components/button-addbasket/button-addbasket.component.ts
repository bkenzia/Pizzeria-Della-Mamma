import { Component } from '@angular/core';
import { BasketProduct, BasketService } from 'src/app/services/basket.service';
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



  constructor (private productsService : ProductsService, private basketService : BasketService) { }

  
  addToBasket() {
  
    if(!this.productP) return;
  
    const basketProduct: BasketProduct = {product: this.productP, quantity: this.quantity}
    
    this.basketService.addToBasket(basketProduct);

  }
  
  //Fonction qui transforme le panier en string et l'enregistre, ajout de prix total et de quantité totale

  // private saveBasket(basket: BasketProduct[]) {
  //   localStorage.setItem('basket', JSON.stringify(basket));
  //   this.getBasketTotalPrice();
  //   this.getTotalQuantity();
  // }

  }

