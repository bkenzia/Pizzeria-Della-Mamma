import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterByTagComponent } from './components/filter-by-tag/filter-by-tag.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { CentimesToEurosPipe, ProductCardsComponent } from './components/product-cards/product-cards.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AllProductsComponent,
    ProductCardsComponent,
    CentimesToEurosPipe,
    HeaderComponent,
    FilterByTagComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // pipes for currency FR
  bootstrap: [AppComponent]
})
export class AppModule { }
