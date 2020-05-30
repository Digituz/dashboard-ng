import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Product from './product.entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private PRODUCTS_ENDPOINT = '/products';

  constructor(private httpClient: HttpClient) {}

  public loadProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.PRODUCTS_ENDPOINT);
  }
}
