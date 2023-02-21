import { Component } from '@angular/core';
import { IProduct, PRODUCTS } from 'src/app/mocks/products';
import { Pipe, PipeTransform } from '@angular/core';

// @Pipe = décorateur -> utile pour définir un Pipe. Prend un objet en parametre qui contient un nom pour le pipe 'name'
@Pipe({name: 'centimesToEuros'})
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

type MyType = {
  [key: string]: IProduct[]
}

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent {
  
  productcards : IProduct[] = PRODUCTS;
  productlist : IProduct[] = PRODUCTS;
  newData! : MyType ;
    
  
  ngOnInit(){
    this.newData= this.trie();
  }
  trie() {
      // On utilise la méthode reduce() pour transformer le tableau de produits en un objet qui regroupe les produits par catégorie
    const newData = PRODUCTS.reduce((r : MyType, currentProduct : IProduct) => {
        // Si la catégorie du produit courant n'existe pas encore dans l'objet r, on crée un tableau vide pour cette catégorie
      r[currentProduct.category] = r[currentProduct.category] || [];
       // On ajoute le produit courant au tableau correspondant à sa catégorie
      r[currentProduct.category].push(currentProduct);

      // On retourne l'objet modifié pour l'itération suivante de reduce()
      return r;    
    },{} )
    console.log(newData);
      // On affiche le nouvel objet qui regroupe les produits par catégorie dans la console
    return newData;
    
    
  }
 


  // r = valeur courante
  // currentPrice = chzque tour de boucle


}
