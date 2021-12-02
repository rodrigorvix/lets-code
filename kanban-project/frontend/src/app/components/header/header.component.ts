import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private cardService: CardService) {}

  ngOnInit(): void {}

  logout(): void {
    if (confirm('Tem certeza que deseja sair do Kanban ?')) {
      this.cardService.isLogged.subscribe((response) => {
        console.log(response);
      });
      this.router.navigateByUrl('/');
      this.cardService.clearAuthKanban();
    }
  }
}
