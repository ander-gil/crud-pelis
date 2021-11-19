import { Component, OnInit } from '@angular/core';
import {MovieserviceService} from '../../services/movieservice.service';
import { Movie } from '../../movies/interfaces/interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieservicio:MovieserviceService, private activateroute:ActivatedRoute) {
    this.getMovies();
  }
  getMovies() {
    this.movieservicio.showMovies()
    .subscribe(res=>{
      this.movies = res;
      console.log(this.movies);
    })
  }

  movies:Movie[] = [];


  ngOnInit(): void {

  }

  delete(id:any){
    if(confirm('Esta seguro de borrar esta pelicula?')){
      this.movieservicio.delete(id)
      .subscribe(res=>{
        this.getMovies();
      })
    }
  }

}
