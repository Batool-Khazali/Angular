import { Component } from '@angular/core';
import { ProjectUrlService } from '../../project-url.service';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrl: './add-services.component.css'
})
export class AddServicesComponent {

  ngOnInit() {

  }

  constructor(private _ser: ProjectUrlService) { }

  image: any
  changeImage(event: any) {
    //debugger
    this.image = event.target.files[0]

  }

  addNewService(data: any) {

    var form = new FormData();

    for (let key in data) {
      form.append(key, data[key])
    }

    form.append('serviceImage', this.image)

    this._ser.addService(form).subscribe(() => {
      alert("added successfully")
    },
      (error) => { alert(error.error) }
    )
  }


}
