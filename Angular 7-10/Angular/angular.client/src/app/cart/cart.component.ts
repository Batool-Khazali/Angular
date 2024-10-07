import { Component } from '@angular/core';
import { ProjectUrlService } from '../project-url.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor (private _ser: ProjectUrlService) { }

  ngOnInit() {
    this.getCartItems()
  }

  cartArray: any

  getCartItems() {
    this._ser.cartItemObserve.subscribe((data) =>
      this.cartArray = data
    )
  }


  addQuan(id: any) {
    this._ser.addQuantity(id)
  }


  subQuan(id: any) {
    this._ser.subQuantity(id)
  }







}
