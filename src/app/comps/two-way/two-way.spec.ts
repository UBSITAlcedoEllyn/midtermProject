import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwoWayBinding } from './two-way';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('TwoWayBinding', () => {
  let component: TwoWayBinding;
  let fixture: ComponentFixture<TwoWayBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayBinding, FormsModule, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default name "Juan Dela Cruz"', () => {
    expect(component.twoWName).toBe('Juan Dela Cruz');
  });

  it('should clear name when resetForm is called', () => {
    component.twoWayName = 'Temporary Name';
    component.resetForm();
    expect(component.twoWayName).toBe('');
  });
});