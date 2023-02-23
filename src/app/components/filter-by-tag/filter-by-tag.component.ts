import { Component } from '@angular/core';
import { ProductCategoryType, TagType, IProductsByCategory } from 'src/app/mocks/mock2.0';



@Component({
  selector: 'app-filter-by-tag',
  templateUrl: './filter-by-tag.component.html',
  styleUrls: ['./filter-by-tag.component.css']
})
export class FilterByTagComponent {
   greet(products: IProductsByCategory) {
    return "hello" + products.category;
  }
  
}

