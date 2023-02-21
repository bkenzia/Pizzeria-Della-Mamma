import { Component , Input} from '@angular/core';
import { IProduct } from 'src/app/mocks/products';
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

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent {
  @Input() product!: IProduct;
  
    

}
