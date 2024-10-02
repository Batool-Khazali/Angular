import { Component } from '@angular/core';
import { ProjectUrlService } from '../project-url.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  ngOnInit() {
  }

  constructor(private _ser: ProjectUrlService, private _route: Router) { }


  addnewuser(data: any) {

    var form = new FormData();

    for (let key in data) {
      form.append(key, data[key])
    }

    this._ser.register(form).subscribe(() => {
      alert("user added successfully")
      this._route.navigate(['/login'])
    },
      (error) => { alert(error.error) }
    )


  }
}
