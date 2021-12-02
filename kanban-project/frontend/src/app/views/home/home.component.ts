import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLogged!: boolean;
  constructor() {}

  ngOnInit(): void {
    this.isLogged = localStorage.getItem('auth-key') ? true : false;
  }
}
