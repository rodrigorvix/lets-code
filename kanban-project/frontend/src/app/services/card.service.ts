import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Card } from '../models/card.model';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private readonly API = environment.baseUrlAPI;

  cardChange = new Subject();
  isLogged = new Subject();

  authorization: string = localStorage.getItem('auth-key') || '';
  headers = {
    'Content-Type': 'application/json',
    Authorization: this.authorization,
  };

  urlCards: string = `${this.API}/cards`;
  options: {} = { headers: this.headers };

  constructor(private http: HttpClient) {}

  authKanban({ login, senha }: Login) {
    const url = `${this.API}/login/`;
    const body = { login, senha };
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
  clearAuthKanban() {
    this.authorization = '';
    localStorage.removeItem('auth-key');
    this.isLogged.next(false);
  }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.urlCards, this.options);
  }

  createCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.urlCards, card, this.options);
  }

  updateCard(card: Card): Observable<Card> {
    return this.http.put<any>(
      `${this.urlCards}/${card.id}`,
      card,
      this.options
    );
  }

  removeCard(id: any): Observable<Card> {
    return this.http.delete<any>(`${this.urlCards}/${id}`, this.options);
  }
}
