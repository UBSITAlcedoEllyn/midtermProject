import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../products/product';
import { ProductsService } from '../products-service/products-service';


@Component({
  selector: 'app-view-details',
  imports: [FormsModule,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './view-details.html',
  styleUrl: './view-details.css'
})
export class ViewDetailsComponent implements OnInit {
  productId = '';
  product : Product|undefined;
  reviewNote = '';
  errorMessage = ''

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ){}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (isNaN(id)) {
      this.errorMessage = 'Invalid product ID.';
      return;
    }

    this.product = this.productService.getProductsById(id);
    if (!this.product) {
      this.errorMessage = `Product with ID ${id} not found.`;
    }
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

  
}