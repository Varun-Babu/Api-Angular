import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPassengerComponent } from './view-passenger/view-passenger.component';
import { ViewUsaComponent } from './view-usa/view-usa.component';

const myRoute : Routes=[
  {
    path:"",
    component:ViewPassengerComponent
  },
  {
    path:"usa",
    component:ViewUsaComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewPassengerComponent,
    ViewUsaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
