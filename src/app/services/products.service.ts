import { Injectable } from '@angular/core';
import { IProduct, PRODUCTS } from 'src/app/mocks/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  
  //retourne la liste de tous les produits
  getProducts():IProduct[]{
    return PRODUCTS;
  }
  //retourne un produit par id
  getProduct(id:number): IProduct | undefined{
    return PRODUCTS.find(product => product.id ===id);
  }
  //retourne une categorie
  getCategoryProduct(categoryA:string)
  {
    return PRODUCTS.filter(categoryProduct => categoryProduct.category === categoryA);
  }

}