import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import{ Observable} from 'rxjs' ;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getTrendingMovie():Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/day?api_key=0751a6b8887984b99bc3f7291abf0a37');
  }
  getTrendingTv():Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/day?api_key=0751a6b8887984b99bc3f7291abf0a37');
  }
  getMovieDetails(id):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0751a6b8887984b99bc3f7291abf0a37`);
  }



}
