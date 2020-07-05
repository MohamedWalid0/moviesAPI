import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms' ;
import {AuthService} from '../auth.service' ;
import {Router} from '@angular/router' ;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router) { }

  registerForm:FormGroup = new FormGroup ({

    'first_name': new FormControl (null , [Validators.required , Validators.minLength(3) , Validators.maxLength(11)] ) ,
    'last_name': new FormControl (null , [Validators.required , Validators.minLength(3) , Validators.maxLength(11)] ) ,
    'age': new FormControl (null , [Validators.required , Validators.min(15) , Validators.max(85)]) ,
    'email': new FormControl (null , [Validators.required , Validators.email] ) ,
    'password': new FormControl (null , [Validators.required ]) ,

  })


  registrationError:string ;

  getFormData(registerForm){
    
    if(registerForm.valid == true){

      this._AuthService.signUp(registerForm.value).subscribe( data =>{


        if(data.message =='success'){
          
          this._Router.navigate(['/signin'])
        }
 
        else{
          this.registrationError = 'Mail is already registered' ;
        }


      })

    
    }


  }




  ngOnInit(): void {
  }

}
