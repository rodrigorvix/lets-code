import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { DoneComponent } from './components/done/done.component';
import { TodoComponent } from './components/todo/todo.component';
import { DoingComponent } from './components/doing/doing.component';
import { HeaderComponent } from './components/header/header.component';
import { KanbanListComponent } from './components/kanban-list/kanban-list.component';
import { CardViewComponent } from './components/card/card-view/card-view.component';
import { CardCreateComponent } from './components/card/card-create/card-create.component';
import { NewCardComponent } from './components/new-card/new-card.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';  
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    DoneComponent,
    TodoComponent,
    DoingComponent,
    HeaderComponent,
    KanbanListComponent,
    CardViewComponent,
    CardCreateComponent,
    NewCardComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
