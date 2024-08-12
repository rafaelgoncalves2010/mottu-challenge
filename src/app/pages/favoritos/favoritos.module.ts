import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritosRoutingModule } from './favoritos-routing.module';
import { PersonagemModule } from 'src/app/shared/components/personagem/personagem.module';
import { FavoritosComponent } from './favoritos.component';


@NgModule({
  declarations: [FavoritosComponent],
  imports: [
    CommonModule,
    FavoritosRoutingModule,
    PersonagemModule
  ]
})
export class FavoritosModule { }
