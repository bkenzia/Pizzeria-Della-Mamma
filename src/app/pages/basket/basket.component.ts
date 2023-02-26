import { Component, Pipe, PipeTransform } from '@angular/core';
import { BasketProduct, BasketService } from 'src/app/services/basket.service';

@Pipe({ name: 'centimesToEuros' })
export class CentimesToEurosPipe implements PipeTransform {
  // transform = prend en parametre une valeur d'entree ('value') et retourne une valeur de sortie
  transform(value: number): string {
    //  vérifie si la valeur en entrée est nulle ou indéfinie. si oui, retourne une chaine vide
    if (value == null) return '';

    // si valeur valide, la méthode divise la valeur en entrée par 100 pour obtenir la valeur en euros
    const euros = value / 100;

    //  formate la valeur en euros pour avoir deux décimales après la virgule et on la concatène avec le symbole €
    const eurosFormatted = euros.toFixed(2) + ' €';

    // On retourne la valeur en euros
    return eurosFormatted;
  }
}

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent {
  basket: BasketProduct[] = [];

  constructor(public basketService: BasketService) {}

  ngOnInit() {
    this.getbasket();
  }

  getbasket() {
    this.basket = this.basketService.getBasket();
  }

  removeProduct() {
    this.basketService.removeCart();

    this.getbasket();
  }
  getNumber(): string | null {
    const number = localStorage.getItem('number');
    return number;
  }
}
