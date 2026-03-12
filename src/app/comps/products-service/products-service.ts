import { Injectable } from '@angular/core';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: "Laptop Pro",
      category: "Electronics",
      price: 1200,
      stock: 15,
      status: "Available",
      description: "High performance laptop for professionals.",
      brand: "TechBrand",
      rating: 4.8,
      releaseDate: "2024-02-10",
      dateAdded: "2024-02-15"
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductsById(id: number): Product | undefined {
    return this.products.find(e => e.id === id);
  }

  updateProducts(updated: Product): void {
    const idx = this.products.findIndex(e => e.id === updated.id);
    if (idx !== -1) this.products[idx] = { ...updated };
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('auth_token');
  }

  login(): void {
    sessionStorage.setItem('auth_token', 'demo-token');
  }

  logout(): void {
    sessionStorage.removeItem('auth_token');
  }
}