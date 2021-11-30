import { Component, Input, OnInit } from '@angular/core';


import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() testeKanban!:()=>void;

  @Input() cardsList!:Array<Card>;

  cardsListTodo!: Array<Card>;
 
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.cardsListsChanged.subscribe((data) => {
      console.log(data)
    })
  }
  
 
}
