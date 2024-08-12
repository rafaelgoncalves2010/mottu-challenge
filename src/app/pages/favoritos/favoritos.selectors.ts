import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FavoritosState } from './favoritos.reducer';

export const selecionarFavoritosState = createFeatureSelector<FavoritosState>('favoritos');

export const selecionarTodosFavoritos = createSelector(
  selecionarFavoritosState,
  (state: FavoritosState) => {
    console.log(' state.favoritos',  state.favoritos)
    return state.favoritos
  }
);
