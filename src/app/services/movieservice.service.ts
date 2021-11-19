import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../movies/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  private url:string = 'http://127.0.0.1:8000/api'

  constructor(private http:HttpClient) { }

  showMovies() {
    return this.http.get<Movie[]>(`${this.url}/movies`);
  }

  agregar(movie:Movie) {
    return this.http.post<Movie>(`${this.url}/movies`,movie);
  }

  update(movie:Movie) {
    return this.http.put<Movie>(`${this.url}/movies/${movie.id}`,movie);
  }

  showMovie(id:any) {
    return this.http.get<Movie>(`${this.url}/movies/${id}`);
  }

  delete(id:any){
    return this.http.delete<Movie[]>(`${this.url}/movies/${id}`);
  }
}
