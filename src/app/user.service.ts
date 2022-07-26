import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  create(user: User): void {
    const body = JSON.stringify(user)
    console.log(body);
    
    //TODO call API 
  }

  find(username: string, password: string): User {
    //TODO call API and set in sessionStorage
    return null
  }
}
