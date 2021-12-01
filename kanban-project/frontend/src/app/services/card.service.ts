import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Card } from '../models/card.model';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

 
  private readonly API = "http://localhost:5000"
  
   cardChange = new Subject();
   isLogged = new Subject();
  
  authorization: string = localStorage.getItem('auth-key') || '';
    headers = {
      'Content-Type': 'application/json',
      Authorization: this.authorization,
    };

  constructor(private http: HttpClient) { }

  authKanban({login,senha}:Login) {
    const url = `${this.API}/login/`;
    const body = {login, senha };
    const headers = { 'Content-Type': 'application/json' };
    const options = { headers };
    const response = this.http.post<string>(url, body, options);
    return response;
  }
  setAuthKanban(token: string) {
    this.authorization = 'Bearer ' + token;
    localStorage.setItem('auth-key', this.authorization);
    this.isLogged.next(true);
  }
  clearAuthKanban(){
    this.authorization = '';
    localStorage.removeItem('auth-key');
    this.isLogged.next(true);
  }
  

  getCards(): Observable<Card []> {
    const url = `${this.API}/cards/`;
    const options = { headers: this.headers };
    return this.http.get<Card []>(url,options)
  }

  createCard(card: Card): Observable<Card> {
    const url = `${this.API}/cards/`;
    const options = { headers: this.headers };
    return this.http.post<Card>(url, card, options)
  }

  updateCard(card: Card): Observable<Card> {
    const url = `${this.API}/cards/`;
    const options = { headers: this.headers };
    return this.http.put<Card>(`${url}/${card.id}`, card, options)
  }

  removeCard(id:any): Observable<Card> {
    const url = `${this.API}/cards/`;
    const options = { headers: this.headers };
    return this.http.delete<any>(`${url}/${id}`, options)
  }

}
