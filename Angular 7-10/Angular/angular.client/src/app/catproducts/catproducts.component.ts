import { Component } from '@angular/core';
import { ProjectUrlService } from '../project-url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catproducts',
  templateUrl: './catproducts.component.html',
  styleUrl: './catproducts.component.css'
})
export class CatproductsComponent {

  constructor(private _ser: ProjectUrlService, private _route: ActivatedRoute) { }

  paramter: any
  userId: any

  ngOnInit() {
    this.paramter = this._route.snapshot.paramMap.get('id');

    this.catPro(this.paramter)

    this._ser.UserID.subscribe((data) =>
      this.userId = data
    )
  }

  proArr: any

  catPro(id: number) {
    this._ser.getProByCat(id).subscribe((data) =>
      this.proArr = data
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
