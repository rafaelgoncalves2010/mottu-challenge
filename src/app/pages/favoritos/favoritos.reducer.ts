import { createReducer, on } from "@ngrx/store";
import { Character } from "src/app/models/inicio.interface";
import { adicionarFavorito, excluirFavorito } from "./favoritos.actions";

export interface FavoritosState {
    favoritos: Character[];
  }
  
  export const initialState: FavoritosState = {
    favoritos: [],
  };
  
  export const favoritosReducer = createReducer(
    initialState,
      on(adicionarFavorito, (state, { personagem }) => {
        const newState = {
          ...state,
          favoritos: [...state.favoritos, personagem],
        };
        return newState;
      }), 
    on(excluirFavorito, (state, { idPersonagem }) => ({
      ...state,
      favoritos: state.favoritos.filter(personagem => personagem.id !== idPersonagem),
    }))
  );
