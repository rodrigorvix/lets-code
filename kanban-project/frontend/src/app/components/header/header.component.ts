import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private cardService: CardService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigateByUrl('/');
    this.cardService.clearAuthKanban();
  }

}
