import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-kanban-list',
  templateUrl: './kanban-list.component.html',
  styleUrls: ['./kanban-list.component.scss']
})
export class KanbanListComponent implements OnInit {

  cardsList!: Array<Card>;

  constructor(private cardService:CardService) { }

  ngOnInit(): void {
    this.cardService.getCards().subscribe((data) => {
    this.cardsList = data;
     })
  }

}
