import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private readonly API = "http://localhost:3001/kanban"

  constructor(private http: HttpClient) { }

  getCards(): Observable<Card []> {
    return this.http.get<Card []>(this.API)
  }
}
