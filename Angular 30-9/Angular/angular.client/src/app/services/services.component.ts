import { Component } from '@angular/core';
import { ProjectUrlService } from '../project-url.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
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
