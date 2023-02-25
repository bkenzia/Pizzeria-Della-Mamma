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
  slectedTags: TagType[] = [];
  isSelected: boolean = true;
  ngOnInit() {
    // this.getProductsbyCategorie(categorie);
    // this.tagssSelected();
    console.log(this.slectedTags);
    // this.updateProductCategorie(this.toto());
  }

  tagssSelected(tag: TagType): TagType[] {
    // const elementTomato = document.querySelector('a:nth-child(1)');
    // const elementBlanch = document.querySelector('a:nth-child(2)');
    // elementTomato?.classList.toggle('tomato');
    // elementBlanch?.classList.toggle('tomato');
    this.isSelected = this.slectedTags.some((element) => element === tag);
    if (!this.isSelected) {
      this.slectedTags.push(tag);
    } else {
      var myIndex = this.slectedTags.indexOf(tag);
      if (myIndex !== -1) {
        this.slectedTags.splice(myIndex, 1);
      }
    }

    const selectedTagUnique = this.slectedTags.filter(
      (x, i) => this.slectedTags.indexOf(x) === i
    );

    console.log(this.isSelected);
    return selectedTagUnique;
  }

  findTag(tags: TagType[], tag: TagType) {
    console.log(tags.some((element) => element === tag));
    return tags.some((element) => element === tag);
  }

  updateProductCategorie(tag: TagType) {
    const selectedTags = this.tagssSelected(tag);

    if (selectedTags.length > 0) {
      console.log(selectedTags);
      const productFilter = this.productsCategories.map((productcategorie) => {
        return {
          ...productcategorie,
          products: productcategorie.products.filter((product) =>
            // this.findTag(product.tags, tag)
            selectedTags.some((selectedTag) =>
              product.tags.includes(selectedTag)
            )
          ),
        };
      });

      this.productsEvent.emit(productFilter);

      return productFilter;
    } else {
      return PRODUCTS;
    }
  }
}
