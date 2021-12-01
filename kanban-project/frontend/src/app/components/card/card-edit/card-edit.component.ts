import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';


@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss']
})
export class CardEditComponent implements OnInit {
 
  @Input() card!:Card;


  constructor() { }

  ngOnInit(): void {
  }


}
