import { Component, Input } from '@angular/core';
import { IProductsByCategory } from 'src/app/mocks/mock2.0';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css'],
})
export class ProductsCategoryComponent {
  @Input() products!: IProductsByCategory[];
}
