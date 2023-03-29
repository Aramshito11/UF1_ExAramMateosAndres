import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-practiques',
  templateUrl: './practiques.component.html',
  styleUrls: ['./practiques.component.css']
})
export class PractiquesComponent {
  constructor(private http: HttpClient) {
  }

  ex1(){
    this.http.post("http://localhost:4080/examen/ex1",{}).subscribe((resposta)=>{
      console.log(resposta)
    })
  }

  ex2(){
    this.http.post("http://localhost:4080/examen/ex2",{}).subscribe((resposta)=>{
      console.log(resposta)
    })
  }

  ex3(){
    this.http.post("http://localhost:4080/examen/ex3",{}).subscribe((resposta)=>{
      console.log(resposta)
    })
  }

  ex4(){
    this.http.post("http://localhost:4080/examen/ex4",{}).subscribe((resposta)=>{
      console.log(resposta)
    })
  }
}
