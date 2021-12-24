import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterAngular } from 'Models/Register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  req:string="https://localhost:44375/api/Auth/Register";
  constructor(private http:HttpClient) { }
  
  postregister(register:RegisterAngular):Observable<any>
  {
    return this.http.post<any>(this.req,register,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }
}
