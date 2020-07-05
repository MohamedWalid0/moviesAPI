import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms' ;
import {AuthService} from '../auth.service' ;
import {Router} from '@angular/router' ;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _AuthService:AuthService , public _Router:Router) { }

  signinForm:FormGroup = new FormGroup ({

    'email': new FormControl (null , [Validators.required , Validators.email] ) ,
    'password': new FormControl (null , [Validators.required ]) ,

  })

  signInError:string ;

  getFormData(formData){
    this._AuthService.signIn(formData.value).subscribe(data =>{

      if(data.message =='success'){
        this._AuthService.saveUserDate(data.user, data.token);

        this._Router.navigate(['/home']);


      }
      
      else{
        this.signInError = "Somthing is wrong" ;
      }

    })

  }








  ngOnInit(): void {
  }

}
