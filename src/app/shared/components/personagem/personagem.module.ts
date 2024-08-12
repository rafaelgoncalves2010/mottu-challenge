import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonagemComponent } from './personagem.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [PersonagemComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [PersonagemComponent],
})
export class PersonagemModule { }
