import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjectUrlService } from './project-url.service';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient, private _ser: ProjectUrlService) { }

  email: string = ""

  ngOnInit() {

    this._ser.emailaddress.subscribe((data) =>
      this.email = data)
    
  }

  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
