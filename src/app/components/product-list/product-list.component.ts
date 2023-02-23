import { Component, Input } from "@angular/core";
import { IProduct, IProductsByCategory } from "src/app/mocks/mock2.0";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent  {
@Input() products! :IProductsByCategory[] ;
}