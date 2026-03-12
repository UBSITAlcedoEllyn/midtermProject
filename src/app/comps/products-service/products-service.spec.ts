import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsService } from './products-service';

describe('ProductsService', () => {
  let component: ProductsService;
  let fixture: ComponentFixture<ProductsService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
