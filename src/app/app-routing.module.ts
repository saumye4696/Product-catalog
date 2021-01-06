import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandListComponent } from './brand-list/brand-list.component';
import { LenovoDataComponent } from './lenovo-data/lenovo-data.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  { path : "brands", component : BrandListComponent },
  { path : "brands/:brand", component : LenovoDataComponent },
  { path : "brands/:brand/:product", component : ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
