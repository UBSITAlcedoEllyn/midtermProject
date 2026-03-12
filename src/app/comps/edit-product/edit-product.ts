import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Product } from '../products/product';
import { ProductsService } from '../products-service/products-service';

@Component({
  selector: 'app-edit-product',
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProductComponent implements OnInit {
  product: Product | undefined;
  errorMessage: string | undefined;
  saved!: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.product = this.productService.getProductsById(+id);
      if (!this.product) {
        this.errorMessage = `Product with Id ${id} not found hello`;
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

  save(): void {
    if (this.product) {
      this.productService.updateProducts(this.product);
      this.saved = true;
      setTimeout(() => (this.saved = false), 2500);
    }
  }
}
