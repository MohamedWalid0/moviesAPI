import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router' ;
import {MoviesService} from '../movies.service'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id:any ;
  movieDetails:any ;
  topTen:any=[] ;
  imagePrefix= 'https://image.tmdb.org/t/p/w500' ;
  loading:boolean = false ; 

  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) {
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');

    _MoviesService.getMovieDetails(this.id).subscribe((data)=>{
      this.movieDetails = data ;
      this.loading = true ; 

    }, (err)=>console.log("error"))


    _MoviesService.getTrendingMovie().subscribe((data)=>{
      for(let i=0 ; i<10 ;i++ ){
        this.topTen.push(data.results[i]) ;
      }

    }, (err)=>console.log("error"))






   }

  ngOnInit(): void {
  }

}
