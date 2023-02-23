import { Component } from '@angular/core';
import { IProduct, IProductsByCategory, PRODUCTS } from 'src/app/mocks/mock2.0';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  productsCategory: IProductsByCategory[] = PRODUCTS;

}
