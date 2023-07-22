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
  constructor(private CardService:CardService) { }

  ngOnInit(): void {
    this.CardService.getCards().subscribe((res)=>{
      console.log(res);
      this.cards=res;
    });
  }
}
