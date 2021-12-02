import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-doing',
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.scss'],
})
export class DoingComponent implements OnInit {
  @Input() cardsListDoing!: Array<Card>;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {}
}
