import { Injectable } from '@angular/core';
import { PRODUCTS, IProduct, TagType } from '../mocks/products';



@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  tags: TagType[] = ["tomato", "white", "drink", "veggie", "dessert"];
  constructor() { }

  //  méthode getProducts qui prend un paramètre tag de type TagType
  getProducts(tag: TagType) {

    // verifie si le tableau de tags contient  un élément
    if (this.tags.length === 1) {

      return PRODUCTS;
      // Si c'est le cas, retournez tous les produits
    }
    else {
      // Sinon, filtrez les produits en fonction du tag fourni
      return PRODUCTS.filter((product) => {
        return product.tags.includes(tag);
      })
    }
  }
}



