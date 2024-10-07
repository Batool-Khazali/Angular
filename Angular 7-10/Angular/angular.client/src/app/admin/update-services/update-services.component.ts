import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectUrlService } from '../../project-url.service';

@Component({
  selector: 'app-update-services',
  templateUrl: './update-services.component.html',
  styleUrl: './update-services.component.css'
})
export class UpdateServicesComponent {

  imageFile: any
  changeImage(event: any) {

    this.imageFile = event.target.files[0]

  }

  ServiceId: any;
  ngOnInit() {
    this.ServiceId = this._route.snapshot.paramMap.get("id");
  }

  constructor(private servicesURLService: ProjectUrlService, private _route: ActivatedRoute, private _router: Router) { }



  updateService(data: any) {
    var formdata = new FormData();


    for (let item in data) {
      formdata.append(item, data[item])
    }

    formdata.append("ServiceImage", this.imageFile)

    this.servicesURLService.updateServices(this.ServiceId, formdata).subscribe(() => {
      alert("Service Updated Successfully !")
      this._router.navigate(["/dashboard/allservices"])
    });
  }

}
