import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navi } from './comps/navi/navi';
import { ProductsComponent } from './comps/products/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('midtermProject');
}
