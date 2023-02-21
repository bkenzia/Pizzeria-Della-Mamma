import { Component , Input} from '@angular/core';
import { IProduct } from 'src/app/mocks/products';


@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent {
  @Input() product!: IProduct;
  
    

}
