import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})

//--------------try

export class ProductsComponent {
  selectedProduct: Product | null = null;
  showModal: boolean = false;

  products: Product[] = [
    {
      id: 1,
      name: "Chocolate Croissant",
      category: "Pastry",
      price: 120,
      stock: 15,
      status: "Available",
      description: "Buttery croissant filled with chocolate.",
      brand: "Sweet Crumbs",
      rating: 4.7,
      dateAdded: "2026-03-01"
    },
    {
      id: 2,
      name: "Strawberry Danish",
      category: "Pastry",
      price: 110,
      stock: 8,
      status: "Limited",
      description: "Flaky pastry with strawberry filling.",
      brand: "Sweet Crumbs",
      rating: 4.6,
      dateAdded: "2026-03-01"
    },
    {
      id: 3,
      name: "Cinnamon Roll",
      category: "Pastry",
      price: 100,
      stock: 0,
      status: "Out of Stock",
      description: "Soft roll with cinnamon glaze.",
      brand: "Sweet Crumbs",
      rating: 4.8,
      dateAdded: "2026-03-02"
    },
    {
      id: 4,
      name: "Blueberry Muffin",
      category: "Pastry",
      price: 95,
      stock: 20,
      status: "Available",
      description: "Moist muffin with blueberries.",
      brand: "Sweet Crumbs",
      rating: 4.5,
      dateAdded: "2026-03-02"
    },
    {
      id: 5,
      name: "Almond Croissant",
      category: "Pastry",
      price: 130,
      stock: 6,
      status: "Limited",
      description: "Croissant filled with almond cream.",
      brand: "Sweet Crumbs",
      rating: 4.7,
      dateAdded: "2026-03-03"
    },
    {
      id: 6,
      name: "Cheese Danish",
      category: "Pastry",
      price: 105,
      stock: 12,
      status: "Available",
      description: "Pastry filled with cream cheese.",
      brand: "Sweet Crumbs",
      rating: 4.4,
      dateAdded: "2026-03-03"
    },
    {
      id: 7,
      name: "Apple Turnover",
      category: "Pastry",
      price: 115,
      stock: 5,
      status: "Limited",
      description: "Pastry filled with apple cinnamon.",
      brand: "Sweet Crumbs",
      rating: 4.6,
      dateAdded: "2026-03-04"
    },
    {
      id: 8,
      name: "Chocolate Muffin",
      category: "Pastry",
      price: 100,
      stock: 14,
      status: "Available",
      description: "Chocolate muffin with chips.",
      brand: "Sweet Crumbs",
      rating: 4.5,
      dateAdded: "2026-03-04"
    },
    {
      id: 9,
      name: "Custard Tart",
      category: "Pastry",
      price: 125,
      stock: 3,
      status: "Limited",
      description: "Custard filling in tart shell.",
      brand: "Sweet Crumbs",
      rating: 4.6,
      dateAdded: "2026-03-05"
    },
    {
      id: 10,
      name: "Butter Croissant",
      category: "Pastry",
      price: 110,
      stock: 18,
      status: "Available",
      description: "Classic flaky butter croissant.",
      brand: "Sweet Crumbs",
      rating: 4.7,
      dateAdded: "2026-03-05"
    }
  ];

  viewProduct(product: Product) {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedProduct = null;
  }
}
