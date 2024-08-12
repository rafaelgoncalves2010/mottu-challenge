import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app.route';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { favoritosReducer } from './pages/favoritos/favoritos.reducer';
import { PersonagemComponent } from './shared/components/personagem/personagem.component';
import { PersonagemModule } from './shared/components/personagem/personagem.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ favoritos: favoritosReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
