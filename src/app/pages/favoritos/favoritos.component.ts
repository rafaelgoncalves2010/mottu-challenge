import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selecionarTodosFavoritos } from './favoritos.selectors';
import { Character } from 'src/app/models/inicio.interface';
import { excluirFavorito } from './favoritos.actions';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent{

  favoritos$: Observable<Character[]>;

  constructor(private store: Store) {
    this.favoritos$ = this.store.select(selecionarTodosFavoritos);
  }

  removerFavorito(personagem: Character) {
    const idPersonagem = personagem.id;
    this.store.dispatch(excluirFavorito({ idPersonagem }));
  }
}
