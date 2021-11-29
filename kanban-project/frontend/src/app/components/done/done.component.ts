import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  cardsListDone!:Array<Card>;


  constructor(private cardService:CardService) { }

  ngOnInit(): void {

    this.cardService.getCards().subscribe((data) => {
      this.cardsListDone = data.filter(card => card.lista ==="done");
       })
  }

}
