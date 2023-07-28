import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from './../../services/card.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cards :Card[]=[];
  offset=0;

  cardTextFC= new FormControl('');
  constructor(private CardService:CardService) { }

  ngOnInit(): void {
    this.cardTextFC.valueChanges.pipe(
      debounceTime(1000)//tiempo de espera
    )
    .subscribe((res)=>{
      this.cards=[];
      this.searchCards(res);
    });
    this.searchCards();
  }

    onScroll() {
    this.offset +=100 ;
    this.searchCards();
  }

 searchCards(cardName: string | null = null){
  this.CardService.getCards(cardName,this.offset).subscribe((res)=>{
      this.cards=[...this.cards,...res];
    });
 }
}
