import { Component, OnInit } from '@angular/core';

import {AuthService} from '../auth.service' ;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  signinCheck:boolean=false ;

  constructor(public _AuthService:AuthService) { 


    _AuthService.userData.subscribe( (data) =>{
     
      if(data){
        this.signinCheck = true ;
      }
      else{
        this.signinCheck = false ;
      }

    })

}

  ngOnInit(): void {
  }

}
