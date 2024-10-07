import { Component } from '@angular/core';
import { ProjectUrlService } from '../project-url.service';

@Component({
  selector: 'app-subsription',
  templateUrl: './subsription.component.html',
  styleUrl: './subsription.component.css'
})
export class SubsriptionComponent {

  constructor(private _ser: ProjectUrlService) { }

  userId: any
  
  ngOnInit() {

    this.getSubscription();
    //this.SubSerId = Number(localStorage.getItem("subserviceId"))
    debugger
    this._ser.UserID.subscribe((data) => {
      debugger;
      this.userId = data
    }
    )

  }

  allSubscriptionArray: any

  getSubscription() {
    this._ser.getSubscription().subscribe((data) => {
      this.allSubscriptionArray = data
    })
  }



  private getFromLS() {
    return Number(localStorage.getItem("subserviceId"))
  }

  //private getUserId() {
  //  return Number(localStorage.getItem("userId"))
  //}

  data = {
    userId: 0,
    "subscriptionId": 0,
    "subServiceId": this.getFromLS() 
  }

  
  addSubscriptionUser(id: number) {
    debugger
    this.data.subscriptionId = id
    this.data.userId = this.userId
    this._ser.addSubscriptionUser(this.data).subscribe(() => {
      alert("user subscription added successfully")
    })
  }







}
