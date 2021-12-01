import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss']
})
export class CardCreateComponent implements OnInit {
  card: Card = {
    titulo:'',
    conteudo:'',
    lista:"todo",
  }
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    
  }

  createNewCard() {

    if(this.card.titulo.trim() === "" || this.card.conteudo.trim() === "") {
      alert("Preencha todos os campos do card!")
      return;
    }

    this.cardService.createCard(this.card).subscribe();
    
    this.cardService.cardChange.next(this.card)
    
    this.card.titulo = '';
      this.card.conteudo = '';
      
  }

  
}
