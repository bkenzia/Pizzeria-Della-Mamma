import { Injectable } from '@angular/core';
import { PRODUCTS, IProduct } from '../mocks/products';



@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  
  constructor() { }

  
// Cette méthode renvoie tous les produits disponibles dans la constante PRODUCTS.
public getProduct() {
  console.log("getProduct");
  
  return PRODUCTS;
}


// Cette méthode prend en entrée un tag et une liste de tags, et renvoie le premier tag correspondant à celui passé en paramètre.
// Elle renvoie undefined si aucun tag ne correspond.
public findTag(tag: string | null, tags: string[]): string | undefined {
  return tags.find((ele) => ele === tag);
}

// Cette méthode prend en entrée un tag et renvoie tous les produits ayant ce tag.
public getProductsByTag(tag: string | null): IProduct[] {
  return PRODUCTS.filter(
    (product) => this.findTag(tag, product.tags) === tag
  );
}
}



