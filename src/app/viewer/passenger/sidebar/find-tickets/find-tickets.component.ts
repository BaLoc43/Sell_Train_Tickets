import { Component } from '@angular/core';

@Component({
  selector: 'app-find-tickets',
  templateUrl: './find-tickets.component.html',
  styleUrls: ['./find-tickets.component.css']
})
export class FindTicketsComponent {
  departureDate?: Date;
  returnDate?: Date;
  isCheck=true;
  minDate: string;
  
  constructor(){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    this.minDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  }
   enableRadio(){
    
    this.isCheck=true;
    this.returnDate = this.departureDate;
   }
   enableRadioTwo(){
    this.isCheck=false;
   
   }

  
  
}
