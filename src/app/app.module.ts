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
import { CentimesToEurosPipe, ProductCardsComponent } from './components/product-cards/product-cards.component';
import { BasketComponent } from './pages/basket/basket.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { CounterComponent } from './components/counter/counter.component';






@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AllProductsComponent,
    CentimesToEurosPipe,
   ProductCardsComponent ,
    HeaderComponent,
    FilterByTagComponent,
    FormNumberTableComponent,
    WelcomeComponent,
    OrderSuccessComponent,
    BasketComponent,
    CounterComponent

    
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  // pipes for currency FR
  bootstrap: [AppComponent],
})
export class AppModule {}
