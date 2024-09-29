import { Component } from '@angular/core';
import { ProjectUrlService } from '../project-url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-services',
  templateUrl: './sub-services.component.html',
  styleUrl: './sub-services.component.css'
})
export class SubServicesComponent {

  paramter: any

  ngOnInit() {
    this.paramter = this._route.snapshot.paramMap.get('id');
    console.log("paramter", this.paramter)
    this.getSubgetSubSerBySerId(this.paramter)
  }

  constructor(private _ser: ProjectUrlService, private _route: ActivatedRoute) { }

  SubServicesArray: any

  getSubgetSubSerBySerId(id: number) {
    this._ser.getSubSerBySerId(id).subscribe((data) => {
      this.SubServicesArray = data
    })
  }
}


