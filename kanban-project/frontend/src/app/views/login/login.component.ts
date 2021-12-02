import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  credentials: Login = {
    login: '',
    senha: '',
  };

  constructor(private router: Router, private cardService: CardService) {}

  ngOnInit(): void {}

  login() {
    if (
      this.credentials.login.trim() === '' ||
      this.credentials.senha.trim() === ''
    ) {
      alert('Preencha todos os campos para efetuar o login!');
      return;
    }

    this.cardService.authKanban(this.credentials).subscribe((token) => {
      if (token) {
        this.cardService.setAuthKanban(token);
        this.cardService.isLogged.next(true);
        this.router.navigate(['/home']);
      } else {
        alert('Usuário ou senha incorretos!');
        this.cardService.clearAuthKanban();
      }
    });
  }
}
