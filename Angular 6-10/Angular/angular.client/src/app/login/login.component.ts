import { Component } from '@angular/core';
import { ProjectUrlService } from '../project-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  ngOnInit() {

  }

  constructor(private _ser: ProjectUrlService, private _route: Router) { }

  userIn(data: any) {

    var form = new FormData();
    for (let k in data) {
      form.append(k, data[k])
    }

    //console.log(data.email)
    //const email = data.email

    this._ser.login(form).subscribe((newData) => {
      alert("logged in successfully")
      //console.log(data)

      localStorage.setItem("userId", newData.userId)
      //debugger

      this._ser['email'].next(newData.email)
      if (newData.email == "huda@gmail.com") {
        this._route.navigate(['/dashboard'])
      }
      else {
        this._route.navigate(['/'])
      }

      //if (email == "huda@gmail.com") {
      //  this._route.navigate(['/dashboard'])
      //}
      //else {
      //  this._route.navigate(['/'])
      //}

    },
      (error) => { alert(error.error) }
    )




  }

}
