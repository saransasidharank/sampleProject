import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  description:string = "please fill the following!!!"
  css_style:string ="fw-bolder text-danger"
  login_url:string = "https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png"
 username:string=""

 constructor(private loginRouter:Router,private ds:DataService){
 }

  getUsername(event:any){
    console.log(event.target.value);
    this.username = event.target.value
    
  }
login(pswd:any){
  if(this.username){
    this.ds.loginUsername= this.username
    console.log(pswd.value);
  alert(`Username: ${this.username},password:${pswd.value}`)
  // navigate to dashboard
  this.loginRouter.navigateByUrl('dashboard')

  }
}
}
