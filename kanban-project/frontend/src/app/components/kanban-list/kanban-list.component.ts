import { Component, OnInit} from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';


@Component({
  selector: 'app-kanban-list',
  templateUrl: './kanban-list.component.html',
  styleUrls: ['./kanban-list.component.scss']
})
export class KanbanListComponent implements OnInit {
  
   cardsListTodo!:Array<Card>;
   cardsListDoing!:Array<Card>;
   cardsListDone!:Array<Card>;
   
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    
    this.listAllCards();
   
      this.cardService.cardChange.subscribe(() => {
        this.listAllCards();   
    })  
  }
  listAllCards() {
    this.cardService.getCards().subscribe((data) => {
      this.cardsListTodo = data.filter(card => card.lista === "todo");
      this.cardsListDoing = data.filter(card => card.lista === "doing");
      this.cardsListDone = data.filter(card => card.lista === "done");
  })
  }


}
