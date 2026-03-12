import { Component, OnInit } from '@angular/core';
import { RouterOutlet,RouterLink,ActivatedRoute,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../products/product';
import { ProductsService } from '../products-service/products-service';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProdListsComponent implements OnInit {
  products: Product [] = [];
  returnUrl: string | null = null;
  searchPlaceholder: string = "Search by name, Department, or Role...";
  selectedId: number|null = null;
  searchTerm = '';
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ){}

ngOnInit(): void{
  this.products = this.productService.getProducts();
}

getProduct(e:Product): void{
  this,this.selectedId = e.id;
  this.router.navigate(['/prod-lists', e.id]);
}

get filteredProducts(): Product[] {
  const term = this.searchTerm.toLowerCase();
    return this.products.filter(product =>
    product.name.toLowerCase().includes(term)
  );
}
}