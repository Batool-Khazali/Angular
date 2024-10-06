import { Component } from '@angular/core';
import { ProjectUrlService } from '../project-url.service';

@Component({
  selector: 'app-subsription',
  templateUrl: './subsription.component.html',
  styleUrl: './subsription.component.css'
})
export class SubsriptionComponent {

  constructor(private _ser: ProjectUrlService) { }
  
  ngOnInit() {

    this.getSubscription()
    //this.SubSerId = Number(localStorage.getItem("subserviceId"))

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

  private getUserId() {
    return Number(localStorage.getItem("userId"))
  }

  data = {
    "userId": this.getUserId(),
    "subscriptionId": 0,
    "subServiceId": this.getFromLS() 
  }

  
  addSubscriptionUser(id: number) {
    debugger
    this.data.subscriptionId = id
    this._ser.addSubscriptionUser(this.data).subscribe(() => {
      alert("user subscription added successfully")
    })
  }







}
