import { Component } from '@angular/core';
import { BasketService } from './services/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'APP-Pizzeria';
  numbertable!: string;

  constructor (public basketService : BasketService) {}

ngOnInit() {
 this.basketService.getBasket();
}

}
