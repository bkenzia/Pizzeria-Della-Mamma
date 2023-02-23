import { Component , OnInit} from '@angular/core';
import { PRODUCTS } from 'src/app/mocks/products';
import { ProductListService } from 'src/app/services/product-list.service';


@Component({
  selector: 'app-filter-by-tag',
  templateUrl: './filter-by-tag.component.html',
  styleUrls: ['./filter-by-tag.component.css']
})
export class FilterByTagComponent implements OnInit {

  constructor(private productsService: ProductListService) { }

 ngOnInit() : void {
  this.productsService.getProduct();
  // this.productsService.getProductsByTag(findTag);

 }

}
