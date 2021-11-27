import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { DoneComponent } from './components/done/done.component';
import { TodoComponent } from './components/todo/todo.component';
import { DoingComponent } from './components/doing/doing.component';
import { HeaderComponent } from './components/header/header.component';
import { KanbanListComponent } from './components/kanban-list/kanban-list.component';
import { NewCardComponent } from './components/new-card/new-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DoneComponent,
    TodoComponent,
    DoingComponent,
    HeaderComponent,
    KanbanListComponent,
    NewCardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
