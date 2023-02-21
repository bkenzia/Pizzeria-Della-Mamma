import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormNumberTableComponent } from './components/form-number-table/form-number-table.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

@NgModule({
  declarations: [AppComponent, FormNumberTableComponent, AllProductsComponent, WelcomeComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
