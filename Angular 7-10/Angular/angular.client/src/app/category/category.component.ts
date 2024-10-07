import { Component } from '@angular/core';
import { ProjectUrlService } from '../project-url.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  constructor(private _ser: ProjectUrlService) { }

  ngOnInit() {
    this.allCat()
  }

  catArr: any

  allCat() {
    this._ser.getAllCategories().subscribe((data) =>
      this.catArr = data
    )
  }



}
