import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  formFields = this.fb.group({
    sku: [''],
    title: [''],
    description: [''],
    productDetails: [''],
    sellingPrice: [null],
    isActive: [false],
  });

  constructor(private fb: FormBuilder, private productService: ProductsService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.productService.saveProduct(this.formFields.value).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
