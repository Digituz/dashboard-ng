import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Router, ActivatedRoute } from '@angular/router';
import Product from '../product.entity';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  formFields: FormGroup;
  product: Product;
  loading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.params.id;

    if (productId === 'new') {
      this.formFields = this.fb.group({
        sku: [''],
        title: [''],
        description: [''],
        productDetails: [''],
        sellingPrice: [null],
        isActive: [false],
      });
      this.loading = false;
    }
  }

  submitProductDetails() {
    this.productService.saveProduct(this.formFields.value).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
