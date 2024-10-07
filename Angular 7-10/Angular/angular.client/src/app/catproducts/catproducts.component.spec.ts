import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatproductsComponent } from './catproducts.component';

describe('CatproductsComponent', () => {
  let component: CatproductsComponent;
  let fixture: ComponentFixture<CatproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatproductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
