import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'Models/Login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  user:Login={
   
    username:'',
    password:''
  }
  constructor(private obj :LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  post_api(login:Login):void
  {
    console.log("second");
    this.obj.Login(login).subscribe(data=>
      {
        {debugger}
        const token=data;
        localStorage.setItem("jwt",token);      
        this.router.navigate(['/second']);
      })
  }

}
