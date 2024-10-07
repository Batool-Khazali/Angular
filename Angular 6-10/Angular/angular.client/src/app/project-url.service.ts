import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectUrlService {

  constructor(private http: HttpClient) { }


  email: BehaviorSubject<string> = new BehaviorSubject<string>("");

  emailaddress = this.email.asObservable();


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

  register(data: any): Observable<any> {
    return this.http.post(`${this.staticData}/Users/regustration`, data)
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.staticData}/Users/login`, data)
  }

  addService(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/Services/addService`, data)
  }


  updateServices(id:number , data: any): Observable<any> {
    return this.http.put<any>(`${this.staticData}/Services/updateServices/${id}`, data)
  }
  



}
