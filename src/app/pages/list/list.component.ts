import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from './../../services/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cards :Card[]=[];
  offset=0;
  constructor(private CardService:CardService) { }

  ngOnInit(): void {
    this.searchCards();
  }
    onScroll() {
    console.log("scrolled!!");
    this.offset +=100 ;
    this.searchCards();
  }
 searchCards(){
  this.CardService.getCards(this.offset).subscribe((res)=>{
      console.log(res);
      this.cards=[...this.cards,...res];
    });
 }
}
