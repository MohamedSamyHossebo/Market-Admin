import { CartComponent } from './carts/components/cart/cart.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { AllProductComponent } from './products/components/all-product/all-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: AllProductComponent },
  { path: "products", component: AllProductComponent },
  { path: "details/:id", component: ProductsDetailsComponent },
  { path: "cart", component: CartComponent },
  { path: "**", redirectTo: "products", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
