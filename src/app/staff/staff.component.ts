import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { GetNewRequest } from 'Models/GetNewRequest';
import { RegisterService } from '../register.service';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  register:GetNewRequest[]=[];
  user:GetNewRequest={
    Sid:0,
    username: '',
    password :'',
    phone :'',
    high :'',
    department :'',
    college :'',
    experience :'',
    status :'',
    userImage:'',
    email :''
  };
  msg:string="";
  flag:boolean=false;
  constructor(private router: Router, private obj:  StaffService,private jwtHelper:JwtHelperService) { }


  ngOnInit(): void {
  }
  post_newreqstaff(reg:GetNewRequest):void{
    this.obj.postnewrequeststaff(reg).subscribe(data=>
      {
        this.msg="Added"
      });
      console.log(this.msg);
      this.router.navigate(['/new']);
  }

}
