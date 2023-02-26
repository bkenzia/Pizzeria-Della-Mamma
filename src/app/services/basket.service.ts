import { Injectable } from '@angular/core';
import { IProduct, PRODUCTS } from 'src/app/mocks/products';
import { ProductsService } from 'src/app/services/products.service';

// interface qui correspond à un produit du panier avec deux propriétes product (objet) et quantité
export interface BasketProduct {
  product: IProduct;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  // deux propriétes du service du panier de type number initialisées à 0
  basketTotalPrice: number = 0;
  productQuantity: number = 0;

  // je mets dans le constructor le service product service
  constructor(private productsService: ProductsService) {}

  //Fonction createBasket() pour créer un panier
  private createBasket() {
    //je transforme mon panier qui est un objet en chaine de caractères
    const newBasket = JSON.stringify([]);
    //j'enregistre le panier avec setItem (clé, valeur) qui sont tous les deux des string
    localStorage.setItem('basket', newBasket);
  }

  //Fonction qui transforme le panier en string et l'enregistre, ajout de prix total et de quantité totale
  private saveBasket(basket: BasketProduct[]) {
    localStorage.setItem('basket', JSON.stringify(basket));
    this.getBasketTotalPrice();
    this.getTotalQuantity();
  }

  // Fonction getBasket() qui nous permet de recuperer le panier et de le creer si il n'existe pas
  getBasket() {
    //on recupere le panier dans localStorage avec getItem avec la clé 'basket'
    const basket = localStorage.getItem('basket');
    //si le panier existe
    if (basket) {
      // on transforme le panier en objet
      return JSON.parse(basket);
      //sinon
    } else {
      // on appelle la fonction creer un panier et on fait une recursivité sur notre fonction getBasket()
      this.createBasket();
      this.getBasket();
    }
  }

  // Fonction addToBasket() qio prend en parametre un produit de type BasketProduct
  addToBasket(basketProduct: BasketProduct) {
    //recuperation du panier
    const basket = this.getBasket();

    // on cherche dans le panier si le produit existe en comparant l'id du panier et id du mock
    const productExists = basket.find(
      (product: BasketProduct) =>
        basketProduct.product.id === product.product.id
    ); // attendre le mock d'Assa pour regler ce probleme

    // if(productExists) {
    //   const productIndex = basket.indexOf(productExists);
    //   basket[productIndex].quantity += basketProduct.quantity;
    //   console.log('existe', basket);
    // } else {
    //   basket.push(basketProduct);
    // }

    // this.saveBasket(basket);

    //si le produit existe
    if (productExists) {
      // on recupere l'index du produit
      //   console.log("product exist", productExists);

      const basketProductId = basket.indexOf(productExists);
      // on incremente la quantité du produit dans le panier
      basket[basketProductId].quantity += basketProduct.quantity;
      // console.log("quantité panier", basket[basketProductId].quantity);
      // console.log("quantité article ajouté", basketProduct.quantity);
    } else {
      // sinon on ajoute le produit dans le panier
      basket.push(basketProduct);
    }
    // on enregistre le panier en appelant la fonction saveBasket()
    this.saveBasket(basket);
  }

  // Fonction pour connaitre le prix total du panier
  getBasketTotalPrice(): void {
    // on recupere le panier
    const basket = this.getBasket();
    // on utilise la méthode reduce avec accumulator et current value pour avoir le prix total du panier
    const totalPrice = basket.reduce(
      (accumulator: number, currentValue: BasketProduct) => {
        // je recupere mon produit par id dans mon mock
        const product = this.productsService.getProduct(
          currentValue.product.id
        );
        //si le produit n'existe pas je retourne juste la valeur de l'accumulateur
        if (!product) return accumulator;
        // si le produit existe, on retourne le produit de l'accumulateur et le prix du prouit : on calcule prix total
        return accumulator + currentValue.quantity * product!.price;
        // initialisation de l'accumulateur à 0
      },
      0
    );
    // on donne la valeur du total du panier à la propriété basketTotal du basket Service
    this.basketTotalPrice = totalPrice;
  }

  //Fonction pour connaitre la quantité de produit dans le panier
  getTotalQuantity(): void {
    // on recupere le panier
    const basket = this.getBasket();
    // on calcule le nombre de produits
    const total = basket.reduce(
      (accumulator: number, currentValue: BasketProduct) => {
        return (accumulator += currentValue.quantity);
      },
      0
    );
    // on assigne la quantité total à la propriété productQuantity du basket service
    this.productQuantity = total;
  }

  //Fonction pour supprimer un produit du panier
  removeProduct(index: number) {
    // on recupere le panier
    const basket = this.getBasket();

    //fonction angular sur un tableau pour pouvoir retirer un element avec son index et le nombre d'elements à retirer
    basket.splice(index, 1);
    // je retransforme mon panier en chaine de caracteres
    //localStorage.setItem('basket', JSON.stringify(basket));
    //j'affiche ma nouvelle quantité
    this.getTotalQuantity();
    //j'affiche mon nouveau prix total
    this.getBasketTotalPrice();
    //j'enregistre mon panier
    this.saveBasket(basket);
  }
  // la fonction removeCart suprime tous les produits de panier
  removeCart() {
    const basket = this.getBasket();
    basket.splice(0, basket.length);
    this.saveBasket(basket);
  }
}
