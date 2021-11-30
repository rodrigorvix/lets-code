import { Component, Input, OnInit } from '@angular/core';


import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  cardsListTodo!: Array<Card>;

  
  constructor(private cardService:CardService) {}

  ngOnInit(): void {

    this.cardService.getCards().subscribe((data) => {
      this.cardsListTodo = data.filter(card => card.lista ==="todo");
       })  
  
  }

  teste() {
    console.log("Testando execução2"); 
  }
}
