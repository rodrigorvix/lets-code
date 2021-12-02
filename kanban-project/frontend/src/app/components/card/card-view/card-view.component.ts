import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {
  showEdit: boolean = false;

  @Input() card!: Card;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {}

  removeCard() {
    this.cardService.removeCard(this.card.id).subscribe(() => {
      this.cardService.cardChange.next(this.card);
    });
  }

  changeListToRight() {
    const list = this.card.lista;
    if (list === 'done') {
      return;
    }

    this.card.lista = list === 'todo' ? 'doing' : 'done';

    this.cardService.updateCard(this.card).subscribe();

    this.cardService.cardChange.next(this.card);
  }

  changeListToLeft() {
    const list = this.card.lista;

    if (list === 'todo') {
      return;
    }
    this.card.lista = list === 'doing' ? 'todo' : 'doing';

    this.cardService.updateCard(this.card).subscribe();

    this.cardService.cardChange.next(this.card);
  }

  handleShowEdit() {
    this.showEdit = !this.showEdit;
  }
  cancelEdit() {
    this.showEdit = !this.showEdit;
    this.cardService.cardChange.next(this.card);
  }

  saveEditCard() {
    this.cardService.updateCard(this.card).subscribe();
    this.cardService.cardChange.next(this.card);
  }
}
