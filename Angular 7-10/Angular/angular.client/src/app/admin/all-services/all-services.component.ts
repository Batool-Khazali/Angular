import { Component } from '@angular/core';
import { ProjectUrlService } from '../../project-url.service';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrl: './all-services.component.css'
})
export class AllServicesComponent {

  constructor(private _ser: ProjectUrlService) { }

  ngOnInit() {
    this.getAllServices();
  }


  ServicesArray: any

  getAllServices() {
    this._ser.getAllServices().subscribe((data) => {
      this.ServicesArray = data
      //console.log(this.ServicesArray, "services")
    })
  }

}
