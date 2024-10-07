import { Component } from '@angular/core';
import { ProjectUrlService } from '../project-url.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {


  userId: any

  ngOnInit() {
    this.getAll()

    this._ser.UserID.subscribe((data) =>
      this.userId = data
    )
  }

  constructor(private _ser: ProjectUrlService) { }

  ProArray: any

  getAll() {
    this._ser.getAllProducts().subscribe((data) =>
      this.ProArray = data
    )
  }

  cartObject =
    {
      CartID: 0,
      ProductID: 0,
      Quantity: 0,
      UserId: 0,
    }

  
  addCartItem(productId: any) {
    //debugger
    this.cartObject.ProductID = productId;

    this.cartObject.UserId = this.userId


    this._ser.addToCart({ ... this.cartObject })
  }



}
