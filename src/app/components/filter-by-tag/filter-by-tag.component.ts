import { Component, EventEmitter, Output } from '@angular/core';
import {
  IProduct,
  IProductsByCategory,
  PRODUCTS,
  TagType,
} from 'src/app/mocks/mock2.0';

@Component({
  selector: 'app-filter-by-tag',
  templateUrl: './filter-by-tag.component.html',
  styleUrls: ['./filter-by-tag.component.css'],
})
export class FilterByTagComponent {
  productsCategories: IProductsByCategory[] = PRODUCTS;
  tags: TagType[] = ['tomato', 'white', 'drink', 'veggie', 'dessert'];
  @Output() productsEvent = new EventEmitter();
  ngOnInit() {
    // this.getProductsbyCategorie(categorie);
  }
  getProductsbyCategorie(categorie: string) {
    const productsCategorie = this.productsCategories.filter(
      (productscategorie) => productscategorie.category == categorie
    );
    // console.log('product de meme categorie', productsCategorie);
    return productsCategorie;
  }
  findTag(tags: TagType[], tag: TagType) {
    return tags.some((element) => element === tag);
  }
  // getProductByTag(categorie: string, tag: TagType) {
  //   const productsCategorie =
  //     this.getProductsbyCategorie(categorie)[0].products;

  //   const productTag = productsCategorie.filter((product) =>
  //     this.findTag(product.tags, tag)
  //   );
  getProductByTag(categorie: string, tag: TagType) {
    const productsCategorie =
      this.getProductsbyCategorie(categorie)[0].products;

    const productTag = productsCategorie.filter((product) =>
      this.findTag(product.tags, tag)
    );

    // console.log('product tag', productTag);
    return productTag;
  }
  updateProductCategorie(tag: TagType) {
    console.log(
      'toto',
      this.productsCategories.map((productcategorie) => {
        return {
          ...productcategorie,
          products: this.getProductByTag(productcategorie.category, tag),
        };
      })
    );

    const test = this.productsCategories.map((productcategorie) => {
      return {
        ...productcategorie,
        products: this.getProductByTag(productcategorie.category, tag),
      };
    });

    this.productsEvent.emit(test);
    return test;
  }
}
