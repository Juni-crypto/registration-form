import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './login/user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }
  
  public doRegistration(user: User){
    return this.http.post("http://localhost:8080/register",user,{responseType:'text' as 'json'});
  }
}
