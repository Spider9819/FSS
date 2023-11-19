import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  term: string=''
  @Output() transmitter =new EventEmitter<string>();

  onFormSumit(event:any){
    event.preventDefault();

    console.log(this.term,);

    this.transmitter.emit(this.term)
    


  }
   
  
}
