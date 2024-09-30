import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectUrlService {

  constructor(private http: HttpClient) { }

  staticData = "https://localhost:7178/api"

  getAllServices(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Services/getAllServices`)
  }
  
  getSubSerBySerId(id : number): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubServices/getSubSerBySerId/${id}`)
  }
  
  getSubSerById(id: number): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubServices/getSubSerById/${id}`)
  }

  getSubscription(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Subscription/getSubscription`)
  }

  addSubscriptionUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/UserSubscription/addSubscriptionUser` , data)
  }


  



}
