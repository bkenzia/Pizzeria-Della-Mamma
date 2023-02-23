import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, PRODUCTS } from 'src/app/mocks/products';

@Component({
  selector: 'app-custom-product',
  templateUrl: './custom-product.component.html',
  styleUrls: ['./custom-product.component.css'],
})
export class CustomProductComponent {
  product!: IProduct;
  constructor(private activatedRout: ActivatedRoute, private router: Router) {}

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
}
