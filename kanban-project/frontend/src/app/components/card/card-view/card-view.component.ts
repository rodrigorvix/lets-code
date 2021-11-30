import { Component, Input, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';


@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  @Input() testeKanban!:()=>void;

  constructor(private cardService:CardService) { }

  ngOnInit(): void {
  }

}
