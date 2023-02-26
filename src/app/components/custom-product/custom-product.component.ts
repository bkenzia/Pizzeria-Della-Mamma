import { Component, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, PRODUCTS } from 'src/app/mocks/products';
import { BasketProduct, BasketService } from 'src/app/services/basket.service';
import { ProductsService } from 'src/app/services/products.service';
// import { IProduct, PRODUCTS } from 'src/app/mocks/products';
// @Pipe = décorateur -> utile pour définir un Pipe. Prend un objet en parametre qui contient un nom pour le pipe 'name'
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
  selector: 'app-custom-product',
  templateUrl: './custom-product.component.html',
  styleUrls: ['./custom-product.component.css'],
})
export class CustomProductComponent {
  product!: IProduct;
  quantity: number = 1;
  constructor(
    private productsService: ProductsService,
    private cartService: BasketService,
    private activatedRout: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProduct();
  }
  getProductById(id: number): IProduct | undefined {
    return PRODUCTS.find((product) => product.id === id);
  }

  getProduct(): void {
    const id = Number(this.activatedRout.snapshot.paramMap.get('id'));

    const productFound = this.getProductById(id);
    if (productFound) {
      this.product = productFound;
      console.log('le produit en question', this.product);
    } else {
      this.router.navigate(['not-found']);
    }
  }

  // method for adding a product to CART (created by erdal)
  addToCart() {
    if (!this.product) return;

    const cartProduct: BasketProduct = {
      product: this.product,
      quantity: this.quantity,
    };
    this.cartService.addToBasket(cartProduct);
  }
}
