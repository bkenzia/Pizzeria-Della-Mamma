import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasketProduct, BasketService } from 'src/app/services/basket.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css'],
})
export class OrderSuccessComponent {
  basket: BasketProduct[] = [];
  constructor(private router: Router, public basketService: BasketService) {}
  ngOnInit() {
    this.getbasket();
  }

  getbasket() {
    this.basket = this.basketService.getBasket();
  }

  getNumber(): string | null {
    const number = localStorage.getItem('number');
    return number;
  }
  anuleCommande() {
    localStorage.setItem('number', '');
    localStorage.removeItem('number');
  }
}
