import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

 
  private readonly API = "http://localhost:3001/kanban"

  public cardChange = new Subject<any>()

  constructor(private http: HttpClient) { }

  getCards(): Observable<Card []> {
    return this.http.get<Card []>(this.API)
  }

  createCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.API, card)
  }

  updateCard(card: Card): Observable<Card> {
    return this.http.patch<Card>(`${this.API}/${card.id}`, card)
  }

  removeCard(id:any): Observable<Card> {
    return this.http.delete<any>(`${this.API}/${id}`)
  }

}
