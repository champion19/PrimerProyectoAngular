import { CardService } from './../../services/card.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable,tap } from 'rxjs';
import { Card } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id!:string;
  card$!:Observable<Card>;
  constructor(
    private route: ActivatedRoute,
    private CardService:CardService ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id') || '';
   this.card$ = this.CardService.getCard(this.id).pipe(tap(console.log));
    }

}
