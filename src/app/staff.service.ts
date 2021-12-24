import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetNewRequest } from 'Models/GetNewRequest';
import { RegisterAngular } from 'Models/Register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  req:string="https://localhost:44375/api/Auth/GetNewRequest";
  constructor(private http:HttpClient) { }
  
  postnewrequeststaff(newrequest:GetNewRequest):Observable<any>
  {
    return this.http.post<any>(this.req,newrequest,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }
}
