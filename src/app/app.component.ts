
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'form';


  currentRating:any;

  ngOnInit(){
    this.currentRating = 0;
  }

  rate(rating:number){
    this.currentRating = rating
  }

  
 

}
