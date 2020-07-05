import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import {Observable ,BehaviorSubject} from 'rxjs' ;
import {userData} from '../userData'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public _HttpClient:HttpClient )  { }

  userData= new BehaviorSubject(null) ;
  

  signUp(data):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup', data);
  }

  signIn(data):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin', data);
  }

  saveUserDate(citizen , token){
    let user = new userData(citizen.first_name ,citizen.last_name , citizen.email , token) ;
    this.userData.next(user) ;
  }

}
