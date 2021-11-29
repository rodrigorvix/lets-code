import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  @Input() testeFunction!:() => void;

  constructor() { }

  ngOnInit(): void {
  }

  teste() {
    this.testeFunction();
  }

}
