import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User =new User("","","");
  message:any;
  constructor(private service:UserRegistrationService) { }

  ngOnInit(): void {
  }
public registerNow(){
  let resp =this.service.doRegistration(this.user);
  resp.subscribe((data)=>this.message=data);
}
}
