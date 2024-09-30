import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { SubServicesComponent } from './sub-services/sub-services.component';
import { DetailsComponent } from './details/details.component';
import { LectureComponent } from './lecture/lecture.component';
import { FormsModule, NgForm } from '@angular/forms';
import { SubsriptionComponent } from './subsription/subsription.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    DetailsComponent,
    ServicesComponent,
    SubServicesComponent,
    LectureComponent,
    SubsriptionComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "services", component: ServicesComponent },
      { path: "subService/:id", component: SubServicesComponent },
      { path: "details/:id", component: DetailsComponent },
      { path: "lecture", component: LectureComponent },
      { path: "subscription", component: SubsriptionComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
