import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormNumberTableComponent } from './components/form-number-table/form-number-table.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterByTagComponent } from './components/filter-by-tag/filter-by-tag.component';

import {
  CentimesToEurosPipe,
  ProductCardsComponent,
} from './components/product-cards/product-cards.component';
import { CustomProductComponent } from './components/custom-product/custom-product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsCategoryComponent } from './components/products-category/products-category.component';

// import { ProductCardsComponent } from './components/product-cards/product-cards.component';
// import { CentimesToEurosPipe } from './components/product-cards/product-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AllProductsComponent,
    CentimesToEurosPipe,
    ProductCardsComponent,
    HeaderComponent,
    FilterByTagComponent,
    FormNumberTableComponent,
    WelcomeComponent,
    CustomProductComponent,
    NotFoundComponent,
    ProductsCategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  // pipes for currency FR
  bootstrap: [AppComponent],
})
export class AppModule {}
