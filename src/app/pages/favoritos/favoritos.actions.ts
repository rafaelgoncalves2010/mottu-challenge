import { createAction, props } from '@ngrx/store';
import { Character } from 'src/app/models/inicio.interface';

export const adicionarFavorito = createAction(
    '[Favoritos] Add Favorite',
    props<{ personagem : Character }>()
);

export const excluirFavorito = createAction(
    '[Favoritos] Remove Favorite',
    props<{ idPersonagem: number }>()
);