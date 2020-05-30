import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [ProductsComponent, ProductFormComponent, ProductsListComponent],
  imports: [NzTableModule, CommonModule, ProductsRoutingModule, NzButtonModule],
})
export class ProductsModule {}
