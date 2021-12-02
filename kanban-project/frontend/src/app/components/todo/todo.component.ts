import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() cardsListTodo!: Array<Card>;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {}
}
