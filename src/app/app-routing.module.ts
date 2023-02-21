import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AllProductsComponent } from './pages/all-products/all-products.component';

const routes: Routes = [

  { path : 'all-products', component : AllProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
