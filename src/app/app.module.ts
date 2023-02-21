import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';

import { CentimesToEurosPipe } from './components/product-cards/product-cards.component';
  // pipes for currency FR


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AllProductsComponent,
    ProductCardsComponent,
    CentimesToEurosPipe,
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
