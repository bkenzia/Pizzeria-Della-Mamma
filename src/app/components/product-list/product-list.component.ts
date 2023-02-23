import { Component } from "@angular/core";
import { IProduct, PRODUCTS } from "src/app/mocks/products";

type MyType = {
  [key: string]: IProduct[]
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  
 
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




}


  // r = valeur courante
  // currentPrice = chzque tour de boucl