import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

import { OrderSuccessComponent } from './pages/order-success/order-success.component'

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'all-products', component: AllProductsComponent },

  { path: 'order-success', component: OrderSuccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
