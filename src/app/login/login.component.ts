import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
//import { User } from './user';
interface User {
  name: string,
  department: string,
  designation: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  message: any;
  isLoggedIn: boolean= false;
  constructor(private service: UserRegistrationService) {
    this.user = { name: "", department: "", designation: "" }
  }

  ngOnInit(): void {
    this.isLoggedIn = false;
  }
  public registerNow() {
    let resp = this.service.doRegistration(this.user);
    resp.subscribe((data) => {
      this.message = data
      this.isLoggedIn = true
    });
  }
}