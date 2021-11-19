import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieserviceService } from 'src/app/services/movieservice.service';
import { Movie } from '../interfaces/interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  movies:Movie[] = [];
  movie:Movie={
  name: '',
  description:'',
  genre:'',
  duration:'',
  year:0
  }

  edit:boolean = false
  id?:number

  agregar(){
    if(this.movie.id){
      this.movieservice.update(this.movie)
      .subscribe(data =>{
        this.router.navigateByUrl('/home');
      })
    }else{
      this.movieservice.agregar(this.movie)
    .subscribe(data =>{
      alert("entro en de lo contrario");
      this.movie={
        name: '',
        description:'',
        genre:'',
        duration:'',
        year:0
      }
    },(error) =>{alert("ocurrio un  error");}
    )
    }

  }


  constructor(private movieservice:MovieserviceService, private activateroute:ActivatedRoute, private router:Router) { }


  ngOnInit(): void {

    this.activateroute.params
    .subscribe(({id})=>{
     // console.log(id);
      this.id=id;
    })
    if(this.id){
      this.movieservice.showMovie(this.id)
      .subscribe(data =>{
        this.edit=true;
        this.movie=data;
      })
    }else{
      this.edit=false;
      console.log("no entra al condicional");
    }
  }

}
