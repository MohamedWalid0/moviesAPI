import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingMovies=[] ;
  trendingTv=[] ;

  imagePrefix= 'https://image.tmdb.org/t/p/w500' ;
  movieData:any ;
  
  constructor(private _MoviesService:MoviesService) { 

    _MoviesService.getTrendingMovie().subscribe((data)=>{

      this.trendingMovies = data.results ;
      this.trendingTv = data.results ;

    
    } , (err)=>console.log("error"))
    
  

  _MoviesService.getTrendingTv().subscribe((data)=>{

    this.trendingTv = data.results ;

  
  } , (err)=>console.log("error"))
  
}


  ngOnInit(): void {
  }

}
