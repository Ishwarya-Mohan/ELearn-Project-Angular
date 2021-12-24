import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RegisterAngular } from 'Models/Register';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:RegisterAngular[]=[];
  user:RegisterAngular={
    userId: 0,
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: '',
    phone: '',
    userImage:''
  };
  postuser:RegisterAngular={
    userId: 0,
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: '',
    phone: '',
    userImage:''
  };
  msg:string="";
  flag:boolean=false;
  constructor(private router: Router, private obj:  RegisterService,private jwtHelper:JwtHelperService) { }

  ngOnInit(): void {
  }
  post_apii(reg:RegisterAngular):void{
    this.obj.postregister(reg).subscribe(data=>
      {
        this.msg="Added"
      });
      console.log(this.msg);
      this.router.navigate(['/new']);
  }
  Move():void{
    this.router.navigate(['/new']);
  }
  IsAuthendicated():boolean{
    const token:string|null=localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token) && token!=null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  Logout():void{
    localStorage.removeItem("jwt");
    this.router.navigate(['/new']);
  }

}
