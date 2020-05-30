import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
    data: {
      breadcrumb: 'Produtos',
    },
  },
  {
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module').then((m) => m.InventoryModule),
    data: {
      breadcrumb: 'Inventório',
    },
  },
  // Fallback when no prior route is matched
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
