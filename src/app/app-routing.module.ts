import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

import { CustomProductComponent } from './components/custom-product/custom-product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BasketComponent } from './pages/basket/basket.component';

import { OrderSuccessComponent } from './pages/order-success/order-success.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'all-products', component: AllProductsComponent },

  { path: 'all-products/:id', component: CustomProductComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
