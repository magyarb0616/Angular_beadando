import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string;
  pass:string;

  constructor(private router: Router) {
    this.user = "";
    this.pass = "";
    if(localStorage.getItem("user")) this.router.navigate(['/List']);
  }

  ngOnInit(): void {
  }

  LoginValues(user:string, pass:string){
    if(user.length > 0
      && pass.length > 0)
      return true;
    else return false;
  }

  Login(user:string, pass:string){
    if(this.LoginValues(user, pass)){
      if(user == "root" && pass == "pass"){
        this.router.navigate(['/List']);
        localStorage.setItem("user", "admin");
      }
      else alert("User doesn't exist");
    }
    else alert("There are empty fields");
  }

}
