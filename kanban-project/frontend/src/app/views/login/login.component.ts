import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials:Login = {
    login:'',
    senha:''
  };
  errorLogin:boolean = false;
  

  constructor(private router:Router,private cardService: CardService) { }

  ngOnInit(): void {
  }

  login(){
   
    this.cardService.authKanban(this.credentials)
      .subscribe((token) => {
        console.log(token)
        if (token) {
          this.cardService.setAuthKanban(token);
          this.router.navigate(['/home']);
          this.errorLogin = false;
        } else {
          this.errorLogin = true;
          this.cardService.clearAuthKanban();
        }
      });
  }

}
