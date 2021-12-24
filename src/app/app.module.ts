import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import{MatToolbarModule}from '@angular/material/toolbar';
import{MatSidenavModule}from '@angular/material/sidenav';
import{MatButtonModule}from '@angular/material/button';
import{MatIconModule}from '@angular/material/icon';
import{MatDividerModule}from '@angular/material/divider';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NewComponent } from './new/new.component';
import { SecondComponent } from './second/second.component';
import { RegisterComponent } from './register/register.component';
import { StaffComponent } from './staff/staff.component';
//import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

export function tokenGet() {
  return localStorage.getItem("jwt");
}
@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    SecondComponent,
    RegisterComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule, 
    MatToolbarModule, 
    FormsModule,
    CommonModule, 
    MatInputModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,JwtModule.forRoot({
      config: {
        tokenGetter: tokenGet,
        allowedDomains: ["*"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
