import { Component } from '@angular/core';
import { ProjectUrlService } from '../project-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private _ser: ProjectUrlService, private _router: Router) { }

  email = "";

  ngOnInit() {
    this._ser.emailaddress.subscribe((data) =>
      this.email = data
    )
  }

  logout() {
    this.email = "";
    //this._router.navigate(['/'])
  }

}
